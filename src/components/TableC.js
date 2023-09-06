import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import base_url from '../service/base_url';
import { Link } from 'react-router-dom';


function TableC({employees}) {
    
    return (
        <div>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Profile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.length > 0 ? employees.map((i , index) => (
                         <tr>
                         <td>{index + 1}</td>
                         <td>{i.fname + " " + i.lname}</td>
                         <td>{i.email}</td>
                         <td>{i.mobile}</td>
                         <td>
                             <Button variant="light">{i.status}</Button>
                         </td>
                         <td>
                             <div>
                                 <img src={`${base_url}/uploads/${i.profile}`} alt="" height="30px" width="30px" />
                             </div>
                         </td>
                         <td>
                             <div class="btn-group">
                                 <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
 
                                 </button>
                                 <ul class="dropdown-menu">
                                     <li>
                                        <Link to={`/view/${i._id}`}>
                                        <a class="dropdown-item">
                                         <i class="fa-solid fa-magnifying-glass me-2" style={{ color: "#ffffff;" }}></i>View</a>
                                         </Link>
                                         </li>
                                     <li>
                                        <Link to={`/edit/${i._id}`}>
                                        <a class="dropdown-item" href="/edit/1">
                                         <i class="fa-solid fa-pen-to-square me-2" style={{ color: "#ffffff;" }}></i>Edit</a>
                                         </Link>
                                         </li>
                                     <li><a class="dropdown-item" href="/delete">
                                         <i class="fa-solid fa-trash me-2" style={{ color: "#ffffff;" }}></i>Delete</a></li>
                                 </ul>
                             </div>
 
                         </td>
                     </tr>
                    ))
                                 
                            :    "no employees present"  
                               }
                </tbody>
            </Table>



        </div>
    )
}

export default TableC