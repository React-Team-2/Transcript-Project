import React, { useState, useEffect } from "react";
import "../trainee/Trainee.css";
import AddTrainee from "./AddTraineeForm";
import AllTrainees from "./AllTrainees";
import AssignTraineeCourse from "./AssignTraineeCourse";
import AssignTraineeTrack from "./AssignTraineeTrack";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";    

const Trainee = (props) => {
  
  const [show, setShow] = useState(false);
  const [showAssign ,setShowAssign]=useState(false);
  const [showAssigned ,setShowAssigned]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAssignClose = () => setShowAssign(false);
  const handleAssignShow=()=>setShowAssign(true)
  const handleAssignShow2=()=>setShowAssigned(true)
  const handleAssignedClose = () => setShowAssigned(false);


  
  useEffect(() =>{
    props.fetchCourses();
    props.fetchTracks();
  }, [])

  return (
    <div className="container p-5">
      <Row className="mb-3">
        <Col>
          <div className="text-center">
            <Button variant="primary" onClick={handleShow}>
              Add Trainee
            </Button>
            <Button variant="primary" onClick={handleAssignShow}>
              Assign Course
            </Button>
            <Button variant="primary" onClick={handleAssignShow2}>
              Assign Track
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
              closeButton = {handleClose}
             />
          </Modal.Body>
        </Modal>
          <Modal show={showAssign} onHide={handleAssignClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Assign Course </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AssignTraineeCourse 
            trainees = {props.trainees}
            courses = {props.courses}
            closeButton = {handleAssignClose}
            />
          </Modal.Body>
        </Modal>

        <Modal show={showAssigned} onHide={handleAssignClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Assign Track </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AssignTraineeTrack 
            trainees = {props.trainees}
            tracks = {props.tracks}
            closeButton = {handleAssignedClose}
            />
          </Modal.Body>
        </Modal>
      </Row>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.allTrainees.loading,
    trainees: state.allTrainees.trainees,
    courses: state.allCourses.courses,
    tracks: state.allTraineeTracks.tracks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainees: () => dispatch(actionCreator.fetchTrainees()),
    delTrainee: (id) => dispatch(actionCreator.delTrainee(id)),
    fetchCourses: () => dispatch(actionCreator.fetchCourses()),
    fetchTracks: ()=> dispatch(actionCreator.fetchTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainee);