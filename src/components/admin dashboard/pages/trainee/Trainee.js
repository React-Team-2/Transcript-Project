import React, { useState } from "react";
// import "../trainee/Trainee.css";
import AddTrainee from "./AddTraineeForm";
import AllTrainees from "./AllTrainees";
import AssignTraineeCourse from "./AssignTraineeCourse";
import { Modal, Button, Row, Col } from "react-bootstrap";

const Trainee = () => {
  
  const [show, setShow] = useState(false);
  const [showAssign ,setShowAssign]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAssignClose = () => setShowAssign(false);
  const handleAssignShow=()=>setShowAssign(true)
  
  

  return (
    <div className="container p-5">
      <Row className="mb-3">
        <Col>
          <div className="text-center">
            <Button variant="primary" onClick={handleShow}>
              Add Trainee
            </Button>
            {"  "}
            <Button variant="primary" onClick={handleAssignShow}>
              Assign Course
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <AllTrainees />

        {/* Add Trainee Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add trainee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTrainee 
            
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Trainee
            </Button>
          </Modal.Footer>
        </Modal>

          {/* Assign Course Modal */}
          <Modal show={showAssign} onHide={handleAssignClose}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AssignTraineeCourse 
            
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAssignClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAssignClose}>
              Assign Course
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </div>
  );
};

export default Trainee;
