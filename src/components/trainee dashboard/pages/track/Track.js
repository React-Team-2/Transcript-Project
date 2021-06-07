import React, { Component } from 'react';
import {connect} from "react-redux";
import '../courses/Course.css';
import axios from "axios";

class track extends Component {
    render() {
        async function fetchTracks(){
            const fetchedTracks = await axios.get('https://amalitech-tms.herokuapp.com/tracks?user=60ba4ef1303e0f1b04b7a26c', {
                headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4"}
            })
            return fetchedTracks.data.result;
       }

       
       fetchTracks().then(tracks =>{
        this.props.updatetracks(tracks)
       })
       
        let trackData =this.props.track;
        //Date Created
        trackData.map(track=>{
            const date = new Date(track.enrollment_date);
            track.enrollment_date = date.toLocaleDateString();
        })
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
                <select id="sort" class="form-select w-auto ms-3" aria-label="Default select example">
                  <option>ASC</option>
                  <option>DESC</option>
                </select>
                </div>
              </div>
              <div class="col">
                <button className="btn btn-success">Print</button>
              </div>
            </div>
            <hr/>
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
              <tbody>
                 
                {trackData.map((track,index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{track.track_name}</td>
                      <td>{track.track_master}</td>
                      <td>{track.enrollment_date}</td>
                     
                      <td><button className="btn btn-primary">View</button></td>

                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
         


          
        );
    }
}

const mapStateToProps = state =>{
     return{
         track:state.allTracks
     }
}


const mapDispatchToProps = dispatch =>{
    return{
        updatetracks:(tracks)=>dispatch({type:"UPDATE_TRACKS", value: tracks})
        }
}

export default connect(mapStateToProps,mapDispatchToProps) (track);