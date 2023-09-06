import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Loading from './Loading';
import './home.css';
import { Link } from 'react-router-dom';
import TableC from './TableC';
import { registerContext } from '../employeeContext/ContextShare';
import Alert from 'react-bootstrap/Alert';
import { getAllEmployees } from '../service/allApis';


function Home() {

    //state to store all Employees
    const [allEmployees, setAllEmployees] = useState([]);

    //to get context
    const { registerData, setRegisterData } = useContext(registerContext);

    //state to handle the loading ...
    const [showSpin, setSpin] = useState(false);

    //api call to get all Employees
    const getEmployees = async () => {
        const response = await getAllEmployees();
        console.log(response.data);
        setAllEmployees(response.data);
    }

    useEffect(() => {

        getEmployees();
        
        setTimeout(() =>{
            setSpin(true)
        },2000);
    },[])

    console.log(showSpin);

    return (
        <div class="container-fluid main" className="">
         { registerData ?  [
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant} dismissible onClose={() => setRegisterData("")}>
          {registerData.fname} Added Successfully
        </Alert>
      )) : " " }
            <div class="d-flex justify-content-between mt-5">
                <div className="d-inline-flex" >
                    <input class="form-control me-sm-2" type="search" placeholder="Search" />
                    <Button variant="secondary">Search</Button>
                </div>
                <Link to='/add'>
                <Button variant="success">Add</Button>
                </Link>
            </div>

            <h1 className="mt-5">List Of Employees</h1>
            <div className="mt-3">
                {
                    showSpin ? <TableC employees={allEmployees}></TableC> : <Loading></Loading>

                }
            </div>
        </div>
    )
}

export default Home