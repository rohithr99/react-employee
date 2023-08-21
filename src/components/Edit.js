import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './edit.css';

function Edit() {
  return (
    <div class="main container-fluid">
    <h1 class="text-center mt-5">Register Employee Details</h1>
    <div>
        <div>
            <img src="" alt="" />
        </div>

        <Row>
            <Col sm={12} md={6} lg={6}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3">
                    <Form.Control type="text" placeholder="First Name" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Last Name" className="my-3">
                    <Form.Control type="text" placeholder="Last Name" />
                </FloatingLabel>

                <br />
                <h6>Gender</h6>

                <Form.Check
                    type="radio"
                    label="Male"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="Female"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />

                <div class="my-3">
                    <label for="formFile" class="form-label">Choose Profile Picture</label>
                    <input class="form-control" type="file" id="formFile" placeholder="" />
                </div>

            </Col>
            <Col sm={12} md={6} lg={6}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Mobile Number" className="my-3">
                    <Form.Control placeholder="Mobile Number" />
                </FloatingLabel>

                <br />

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Select Employee Status</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Select...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>                

                <br />
                <FloatingLabel label="Enter Employee Location" className="my-3">
                    <Form.Control placeholder="Enter location" />
                </FloatingLabel>
            </Col>
        </Row>
    </div>
</div>
)
}

export default Edit