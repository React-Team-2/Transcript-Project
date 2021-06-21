import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import AddTrack from "./AddTrackForm";
import * as actionCreator from "../../../../store/actions/action";
import EditTrackForm from "./EditTrackForm";
const AllTracks = (props) => {
  const [state, setState] = useState({ show: false, track: {} });
  const handleClose = () => setState({ show: false, track: {} });
  const handleShow = (track) => setState({ show: true, track: track });

  useEffect(() =>{
    props.fetchTracks();
  }, [])
  const handleDelete = (id) => {
    console.log(id);
    props.delTrack(id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // async function fetchTracks() {
  //   const fetchedTracks = await axios.get(
  //     "https://amalitech-tms.herokuapp.com/tracks",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.token}`,
  //       },
  //     }
  //   );
  //   const trackData = fetchedTracks.data.result;
  //   console.log(trackData);

  //   trackData.map((track) => {
  //     const date = new Date(track.enrollment_date);
  //     track.enrollment_date = date.toLocaleDateString();
  //     return {};
  //   });
  //   props.getTracks(trackData);
  // }
  

  let trackData = props.tracks;
  let fetched = props.loading;

  return (
    <div className="mt-3">
      <div className="col-12">
        <span className="d-flex align-middle">
          <i className="fas fa-file-alt" />
          <h5> All Tracks </h5>
        </span>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th> # </th> <th> Track Title </th> <th> Track Master </th>
            <th> Date Created </th> <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {trackData.map((track, index) => {
            return (
              <tr key={index}>
                <td> {index + 1} </td> <td> {track.track_name} </td>
                <td> {track.track_master} </td> <td> {track.date_created} </td>
                <td>
                  <button
                    onClick={() => handleShow(track)}
                    type="button"
                    className="cursor-pointer far fa-edit btn btn-success"
                  />
                  <button
                    onClick={() => handleDelete(track._id)}
                    type="button"
                    className="far fa-trash-alt  btn btn-danger"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Update Track </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <EditTrackForm
          closeButton={handleClose}
            key={state.track._id}
            id={state.track._id}
            track_name={state.track.track_name}
            track_master={state.track.track_master}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.allTraineeTracks.fetched,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addTracks: (track) => dispatch(actionCreator.addTracks),
    delTrack: (id) => dispatch(actionCreator.delTrack(id)),
    fetchTracks:()=>dispatch(actionCreator.fetchTracks())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllTracks);
