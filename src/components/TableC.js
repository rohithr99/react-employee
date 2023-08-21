import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function TableC() {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button variant="light">Active</Button>
                        </td>
                        <td>
                            <div>
                                <img src="https://i.postimg.cc/dQR6w419/4974985.png" alt="" height="30px" width="30px" />
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/view/1">
                                        <i class="fa-solid fa-magnifying-glass me-2" style={{ color: "#ffffff;" }}></i>View</a></li>
                                    <li><a class="dropdown-item" href="/edit/1">
                                        <i class="fa-solid fa-pen-to-square me-2" style={{ color: "#ffffff;" }}></i>Edit</a></li>
                                    <li><a class="dropdown-item" href="/delete">
                                        <i class="fa-solid fa-trash me-2" style={{ color: "#ffffff;" }}></i>Delete</a></li>
                                </ul>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button variant="light">Active</Button>
                        </td>
                        <td>
                            <div>
                                <img src="https://i.postimg.cc/dQR6w419/4974985.png" alt="" height="30px" width="30px" />
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Button variant="light">Active</Button>
                        </td>
                        <td>
                            <div>
                                <img src="https://i.postimg.cc/dQR6w419/4974985.png" alt="" height="30px" width="30px" />
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">View</a></li>
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li><a class="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>



        </div>
    )
}

export default TableC