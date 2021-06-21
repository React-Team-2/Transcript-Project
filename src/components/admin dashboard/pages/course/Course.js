import React, { useState } from "react";
import "../trainee/Trainee.css";
import CourseForm from "./CourseForm";
import AllCourses from "./AllCourses";
import {Button, Modal} from "react-bootstrap";
import { useSelector, useDispatch} from "react-redux";
import axios from "axios";

const Course = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  
  const state = useSelector(state => state.allCourses);
  const dispatch = useDispatch();

  async function fetchCourses() {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/courses",
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`           
        },
      }
    );
    const courseData = fetchedTracks.data.result;
    
    courseData.forEach((course) => {
      const date = new Date(course.date_created);
      course.date_created = date.toLocaleDateString();
    });
    dispatch({ type: "UPDATE_COURSES", payload: courseData})
  }

    if(!state.fetched){
      fetchCourses()
    }

    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-3">
            <Button variant="primary" onClick={handleShow}>
                    Add Course
            </Button>
          </div>
        </div>

        <div >

          <AllCourses 
            courses={state.courses}
            fetched={state.fetched}
          />
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <CourseForm/>
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