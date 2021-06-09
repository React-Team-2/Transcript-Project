import React, { useState } from "react";
import "../trainee/Trainee.css";
import AddCourse from "./AddCourseForm";
import AllCourses from "./AllCourses";
import {Button, Modal} from "react-bootstrap";
import "../course/Course.css";

const Course = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-3">
            <Button variant="primary" onClick={handleShow}>
                    Add Course
            </Button>
          </div>
        </div>

        <div className="row">
          <AllCourses />
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCourse
            
          
           />
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
        </div>
      </div>
    );
  
}

export default Course;
