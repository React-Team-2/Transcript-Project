import React, { Component } from "react";
import { connect } from "react-redux";
import "../courses/Course.css";
import * as actionCreator from "../../../../store/actions/action";
import axios from "axios";
import Loader from "../../../../Loader";


class track extends Component {
  constructor(props){
    super(props);
   
  }
 

  // async fetchTracks() {
  //   const fetchedTracks = await axios.get(
  //     "https://amalitech-tms.herokuapp.com/tracks?user=60ba4ef1303e0f1b04b7a26c",
  //     {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
  //       },
  //     }
  //   );
  //   const trackData = fetchedTracks.data.result;
   
        
  //   trackData.map((track) => {
  //     const date = new Date(track.enrollment_date);
  //     track.enrollment_date = date.toLocaleDateString();
  //     return {}
  //   });
  //   this.props.getTracks(trackData);
  // }

  componentDidMount(){
    this.props.fetchTraineeTrack()
  }

  render() {
    let trackData = this.props.tracks;
    let fetched = this.props.loading;
    
    // Date Created


    //conditional rendering
    const loadTracks = fetched ? (
      <tbody>
        {trackData.map((track, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{track.track_name}</td>
              <td>{track.track_master}</td>
              <td>{track.enrollment_date}</td>

              <td>
                <button className="btn btn-primary">View</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    ) : (
      <tbody>
        <tr>
          <td className="text-center" colSpan="10">
            <Loader/>
            {/* <div className="spinner-border m-5" role="status">
              <span className="visually-hidden"></span>
            </div> */}
          </td>
        </tr>
      </tbody>
    );

    return (
      <div class="container p-5">
        <div class="row">
          <div class="col-10">
            Track:<span class="ms-3">track_name</span>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-10">
            <div className="d-flex">
              <label for="sort">Sort</label>
              <select
                id="sort"
                class="form-select w-auto ms-3"
                aria-label="Default select example"
              >
                <option>ASC</option>
                <option>DESC</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Track Title</th>
              <th>Track Master</th>
              <th>Date Enrolled</th>
              <th>Action</th>
            </tr>
          </thead>

          {loadTracks}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.allTraineeTracks.fetched,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getTracks: (tracks) => dispatch({ type: "UPDATE_TRACKS", payload: tracks}),
    fetchTraineeTrack:()=>dispatch(actionCreator.fetchTraineeTrack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(track);
