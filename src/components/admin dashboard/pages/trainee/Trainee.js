import React, { useState } from "react";
import {Modal,Button} from "react-bootstrap"
import "../trainee/Trainee.css";
import AddTrainee from "./AddTraineeForm";
import AllTrainees from "./AllTrainees";
import AssignTraineeCourse from "./AssignTraineeCourse";

const Trainee =()=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-12 text-center">
          <Button variant="primary" onClick={handleShow}>
             Add trainee
            </Button>
            
            <Button variant="primary" onClick={handleShow}>
               Assign a course
            </Button>

          </div>
        
        </div>

        <div className="row">
          <AllTrainees />

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
        <AddTrainee/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Course</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
        <AssignTraineeCourse/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>


          
        
        </div>


      </div>
    );
  
}

export default Trainee;
