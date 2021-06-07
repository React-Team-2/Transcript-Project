import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "../../pagination/Pagination";
import "../courses/Course.css";

class transcript extends Component {
  render() {

    let data =this.props.transcript
    return (
      <div class="container p-5">
      <div id="transcript" >
        <div class="row ">
          <div class="col">
            <label >Trainee Name</label>:<span class="ms-3">{data.traineeName}</span>
          </div>
          <div class="col">
          <label>Trainee ID</label>:<span class="ms-3">{data.traineeID}</span>
          </div>
          <div class="col">
            <label>Date</label>:<span class="ms-3">2021-06-03</span>
          </div>
        </div>

        <div className="row mt-3">
          <div class="col">
           <label>Batch</label>:<span class="ms-3">{data.batch}</span>
          </div>
          <div class="col">
          <label>Track</label>:<span class="ms-3">{data.track}</span>
          </div>
          <div className="col">
           <label>Gender</label>:<span className="ms-3">{data.gender}</span>
          </div>
        </div>


        <hr />
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Title</th>
              <th>Course Code</th>
              <th>Date Enrolled</th>
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
     transcript:state.transcript
   }
}

export default connect(mapStateToProps) (transcript);
