import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import {Button, Modal} from "react-bootstrap";
import * as actionCreator from "../../../../store/actions/action";
import axios from "axios";
import { connect } from "react-redux";



const AllCourses = (props) =>{
  const [state, setState] = useState({show: false, course: {}, tracks: []});
  if(!state.tracks){
    props.fetchTracks().then(tracks =>{
      setState({...state, tracks: tracks})
    })
  }

  useEffect(() =>{
    props.fetchCourses();
  }, [])
  const handleClose = () => setState({...state, show: false});
  const handleShow = (course) => setState({show: true, course: course});

  const handleDelete = (id) => {
    console.log(id);
    props.delCourse(id);
    setTimeout(()=>{window.location.reload()}, 1000)
  };

  const [showConfirmModal ,setShowConfirmModal]=useState(false);
  const handleConfirmClose = () => setShowConfirmModal(false);
  const handleConfirmShow=()=>setShowConfirmModal(true)

    return (
      <div className="mt-3">
        <div className="col-12">
          <span className="d-flex align-middle">
            <i className="fas fa-file-alt" />
            <h5>All Courses</h5>
          </span>
        </div>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Course Master</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {props.courses.map((course, index) => {
              return (
                <tr key={course._id}>
                  <td>{index}</td>
                  <td>{course.course_name}</td>
                  <td>{course.course_master}</td>
                  <td>{course.date_created}</td>
                  <td className>
                    <button onClick={() => handleShow({course_name: course.course_name, _id: course._id})}
                    type="button" className="cursor-pointer far fa-edit btn btn-success" />
                    {" "}
                    <button onClick={() => handleDelete(course._id)} type="button" className="far fa-trash-alt btn btn-danger"/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
         <Modal  show={state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
        <CourseForm 
          courseTitle = {state.course.course_name}
          courseCode = {state.course._id}
          tracks = {state.tracks}
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

           
           {/* confirmDelete Modal */}
           <Modal show={showConfirmModal} onHide={handleConfirmClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
               <p>Do you want to delete Item</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleConfirmClose}>
              Yes
            </Button>
            <Button variant="primary" onClick={handleConfirmClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>

       
     
      </div>
    );
  }

//  async function fetchTracks() {
//     const fetchedTracks = await axios.get(
//       "https://amalitech-tms.herokuapp.com/tracks",
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.token}`           
//         },
//       }
//     );
//     const trackData = fetchedTracks.data.result;
        
//     trackData.map((track) => {
//       const date = new Date(track.enrollment_date);
//       track.enrollment_date = date.toLocaleDateString();
//       return {}
//     });

//     return trackData;
//   }
  const mapStateToProps = (state) => {
    return {
      course: state.allCourses.courses,
      tracks: state.allTraineeTracks.tracks,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      delCourse: (id) => dispatch(actionCreator.delCourse(id)),
      fetchCourses: () => dispatch(actionCreator.fetchCourses()),
      fetchTracks:()=>dispatch(actionCreator.fetchTracks())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AllCourses);
