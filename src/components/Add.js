import React, { useEffect, useState } from 'react';
import './add.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { registerApi } from '../service/allApis';
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function Add() {

    //state to hold the image data
    const [image, setImage] = useState("");

    //state to hold response
    const [errorMsg , setErrorMsg] = useState('');
 
    //create a function to store image
    const setProfile = (ev) => {
        //if file type data then file will be inside event.target.files[0]
        //if we need normal type data then it'll be inside event.target.value 
        // console.log(ev.target.files[0]);
        setImage(ev.target.files[0]);
    }

    //state to store preview image
    const [preview, setPreview] = useState("");


    //state to hold all other input datas enter by user
    const [userData, setuserData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        gender: "",
        status: "",
        location: ""
    });
    // console.log(image);

    //create an object for useNavigate
    const navigate = useNavigate();


    //function to update userData 
    const userDetails = (e) => {
        // let value = e.target.value;
        // let name = e.target.name;
        let { value, name } = e.target;
        setuserData({ ...userData, [name]: value });
    }

    console.log(userData);
    useEffect(() => {
        if (image) {
            setPreview(URL.createObjectURL(image))
        }
    }, [image]);

    // console.log(preview);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //preventDefault is used to stop re render through out. since react is using virtual dom it will re render when the onclick is called.


        //header - contentType  - multipart/formData

        const headerConfig = {
            "Content-Type": "multipart/form-data"
        };

        //body - form data
        const data = new FormData();

        //access datas from userData
        const { fname, lname, email, mobile, gender, status, location } = userData;

        if (fname === "") {
            toast.error('firstname required');
        } else if (lname === "") {
            toast.error('lastname required');
        } else if (email === "") {
            toast.error('email required');
        } else if (mobile == '') {
            toast.error('mobile required')
        } else if (gender == '') {
            toast.error("gender required");
        } else if (status == "") {
            toast.error("status required");
        }else if (image == "") {
            toast.error('image required');
        }
         else if (location == " ") {
            toast.error("location requied");
        }  else {
            //add datas in formData
            data.append('user_profile', image);
            data.append('fname', fname);
            data.append('lname', lname);
            data.append('email', email);
            data.append('mobile', mobile);
            data.append('gender', gender);
            data.append('status', status);
            data.append('location', location);

            //api call
            const response = await registerApi(headerConfig, data);
            console.log(response);

            if(response.status === 200){
                //reset userData
                setuserData({...userData,    
                fname: "",
                lname: "",
                email: "",
                mobile: "",
                gender: "",
                status: "",
                location: ""
                });

                setImage('');

                //redirect to home page
                navigate('/');
            }else{
                // console.log(response.response.data);
                setErrorMsg(response.response.data);
            }
        }



    }

    return (
        <div class="main container-fluid">
            { errorMsg ?  [
        'warning',
      ].map((variant) => (
        <Alert  onClose={() => setErrorMsg('')} dismissible key={variant} variant={variant}>
         {errorMsg}
        </Alert>
      )) : " "}
            <h1 class="text-center mt-5">Register Employee Details</h1>
            <div>
                <div class="text-center">
                    <img src={preview ? preview : "https://i.postimg.cc/bYSqXqPP/4974985.png"} alt="" width="300px" height="300px" />
                </div>

                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className="mb-3">
                            <Form.Control name="fname" onChange={userDetails} id="first__name" required type="text" placeholder="First Name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Last Name" className="my-3">
                            <Form.Control required type="text" placeholder="Last Name" onChange={userDetails} name="lname" id="last__name" />
                        </FloatingLabel>

                        <br />
                        <h6>Gender</h6>

                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            id="formHorizontalRadios1"
                            value={'male'}
                            onChange={userDetails}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            id="formHorizontalRadios2"
                            value={"female"}
                            onChange={userDetails}
                        />

                        <div class="my-3">
                            <label for="formFile" class="form-label">Choose Profile Picture</label>
                            <input onChange={setProfile} class="form-control" type="file" id="formFile" placeholder="" />
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control required type="email" placeholder="name@example.com" onChange={userDetails} name="email" id="e_mail" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Mobile Number" className="my-3">
                            <Form.Control onChange={userDetails} name="mobile" id="mobile_number" required placeholder="Mobile Number" />
                        </FloatingLabel>

                        <br />

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Select Employee Status</Form.Label>
                            <Form.Select defaultValue="Choose..." onChange={userDetails} name="status">
                                <option>Select...</option>
                                <option value={'active'}>Active</option>
                                <option value={'inactive'}>Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <br />
                        <FloatingLabel label="Enter Employee Location" className="my-3">
                            <Form.Control onChange={userDetails} name='location' id="loc" required placeholder="Enter location" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <div class="text-center">
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </div>
            <ToastContainer position="top-center" theme="dark" />
        </div>
    )
}

export default Add