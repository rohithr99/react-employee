import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Loading from './Loading';
import './home.css';
import { Link } from 'react-router-dom';
import TableC from './TableC';


function Home() {

    //state to handle the loading ...
    const [showSpin, setSpin] = useState(false);

    useEffect(() => {
        setTimeout(() =>{
            setSpin(true)
        },2000);
    },[])

    console.log(showSpin);

    return (
        <div class="container-fluid main" className="mt-5">
            <div class="d-flex justify-content-between">
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
                    showSpin ? <TableC></TableC> : <Loading></Loading>

                }
            </div>
        </div>
    )
}

export default Home