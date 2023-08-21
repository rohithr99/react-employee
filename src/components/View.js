import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './view.css';

function View() {
  return (
    <div id="view__body">
    <div className="container mt-5">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div class="img__div">
            <img width="350px" src="https://i.postimg.cc/dQR6w419/4974985.png" alt="" />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>

          <ListGroup>
            <ListGroup.Item className="my-2"> <span>Full Name:</span>  </ListGroup.Item>
            <ListGroup.Item className="my-2"> <span>Status:</span> </ListGroup.Item>
            <ListGroup.Item className="my-2"> <span>Mobile Number</span> </ListGroup.Item>
            <ListGroup.Item className="my-2"> <span>Email</span> </ListGroup.Item>
            <ListGroup.Item className="my-2"><span>Gender</span></ListGroup.Item>
            <ListGroup.Item className="my-2"><span>Location</span></ListGroup.Item>

          </ListGroup>

        </Col>
      </Row>

    </div>
    </div>
  )
}

export default View