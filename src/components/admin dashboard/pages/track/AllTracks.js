import React, { useState } from "react";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";

const  AllTracks=()=> {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    async function fetchTracks() {
      const fetchedTracks = await axios.get(
        "https://amalitech-tms.herokuapp.com/courses",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
          },
        }
      );
      const trackData = fetchedTracks.data.result;
          
      this.props.getTracks(trackData);
    }
  
    fetchTracks();

    let trackData = this.props.tracks;
    let fetched = this.props.loading;

    return (
      <div className="row mt-3">
        <div className="col-12">
          <span className="d-flex align-middle">
            <i className="fas fa-file-alt" />
            <h5>All Tracks</h5>
          </span>
        </div>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Track Title</th>
              <th>Track Code</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackData.map((track) => {
              return (
                <tr>
                  <td>{track.id}</td>
                  <td>{track.title}</td>
                  <td>{track.code}</td>
                  <td>{track.date}</td>
                  <td>
                  <i onClick={handleShow} className="cursor-pointer far fa-edit text-success" />
                    <i className="far fa-trash-alt text-danger ms-3" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  
const mapStateToProps = (state) => {
  return {
    loading: state.allCourses.fetched,
    courses: state.allCourses.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (tracks) => dispatch({ type: "UPDATE_TRACKS", payload:tracks}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (AllTracks);
