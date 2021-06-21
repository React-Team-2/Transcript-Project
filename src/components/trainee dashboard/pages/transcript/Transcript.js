import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "../../pagination/Pagination";
import * as actionCreator from "../../../../store/actions/action";
import "../courses/Course.css";
import axios from "axios";


class transcript extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
   
    
    let data =this.props.transcript
    return (
      <div class="container p-5">
      <div id="transcript" >
        <div class="row ">
          <div class="col">
            <label >Trainee Name</label>:<span class="ml-3">{this.props.user ? this.props.user.firstname +" "+ this.props.user.lastname : "username"}</span>
          </div>
          {/* <div class="col">
          <label>Trainee ID</label>:<span class="ms-3">{data.traineeID}</span>
          </div> */}
          <div class="col">
            <label>Date</label>:<span class="ml-3 mr-3">{(new Date(Date.now())).toISOString()}</span>
          </div>
        </div>

        <div className="row mt-3">
          {/* <div class="col">
           <label>Batch</label>:<span class="ms-3">{data.batch}</span>
          </div> */}
          <div class="col">
          <label>Track</label>:<span class="ml-3">{this.props.user ?this.props.user.current_track.track_name: "Current Track"}</span>
          </div>
         
        </div>


        <hr />
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr ><td className="text-center" colspan="4">No Records Available</td></tr>
          </tbody>
        </table>
        
      </div>
      <Pagination/>
      </div>

      

    );
  }
}

const mapStateToProps = state =>{
   return{
     transcript:state.transcript,
     user:state.user.user
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails:(user)=>dispatch(actionCreator.getUserDetails(user))
  };
};




export default connect(mapStateToProps,mapDispatchToProps) (transcript);
