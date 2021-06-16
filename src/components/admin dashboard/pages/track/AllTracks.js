import React, { useState } from "react";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import AddTrack from "./AddTrackForm";

const  AllTracks=(props)=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  async function fetchTracks() {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/tracks?user=60ba4ef1303e0f1b04b7a26c",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
        },
      }
    );
    const trackData = fetchedTracks.data.result;
   
        
    trackData.map((track) => {
      const date = new Date(track.enrollment_date);
      track.enrollment_date = date.toLocaleDateString();
      return {}
    });
    props.getTracks(trackData);
  }
   fetchTracks()


    let trackData = props.tracks;
    let fetched = props.loading;

    return (
      <div className="mt-3">
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
              <th>Track Master</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackData.map((track,index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{track.track_name}</td>
                  <td>{track.track_master}</td>
                  <td>{track.enrollment_date}</td>
                  <td>
                  <button onClick={() => handleShow()}
                    type="button" className="cursor-pointer far fa-edit btn btn-success" />
                       {" "}
                    <button type="button" className="far fa-trash-alt  btn btn-danger" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Track</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
        <AddTrack
            trackName="Media & Design"
            trackMaster="Emmanuel Asaber"     
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
    );
  }

 
const mapStateToProps = (state) => {
  return {
    loading: state.allTraineeTracks.fetched,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (tracks) => dispatch({ type: "UPDATE_TRACKS", payload: tracks}),
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (AllTracks);
