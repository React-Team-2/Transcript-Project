import React, { Component } from 'react';
import '../courses/Course.css';

class track extends Component {
    render() {
        this.records=[
            {id:"1",title:"Foundation",code:"PWJ",date:"2021-01-04"},
            {id:"2",title:"Media & Design",code:"PWJ",date:"2021-01-04"},
            {id:"3",title:"Software Development & Evolution",code:"PWJ",date:"2021-01-04"},
            {id:"4",title:"Machine Learning & Data Analytics",code:"PWJ",date:"2021-01-04"},
            {id:"5",title:"Salesforce Commerce Cloud Development",code:"STWC",date:"2021-03-15"},
            
          ]
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
                  <th>Course Code</th>
                  <th>Date Enrolled</th>
                  <th>Action</th>

                  
                 
                </tr>
              </thead>
              <tbody>
                {this.records.map((track) => {
                  return (
                    <tr>
                      <td>{track.id}</td>
                      <td>{track.title}</td>
                      <td>{track.code}</td>
                      <td>{track.date}</td>
                      <td><button className="btn btn-primary">View</button></td>

                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
         


            // <div className="table-container">
            //     <table>
            //         <thead>
            //             <tr>
            //             <th>No</th>
            //             <th>Track Name</th>
            //             <th>Date Enrolled</th>
            //             <th>Course Profile</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //             <td>1</td>
            //             <td>Media & Design</td>
            //             <td>2021-05-26</td>
            //             <td><button><a>View</a></button></td>
            //             </tr>
            //             <tr>
            //             <td>2</td>
            //             <td>Foundation</td>
            //             <td>2021-02-16</td>
            //             <td><button><a>View</a></button></td>
            //             </tr>
            //             <tr>
            //             <td>3</td>
            //             <td>Advanced</td>
            //             <td>2021-07-16</td>
            //             <td><button><a>View</a></button></td>
            //             </tr>
                       
            //         </tbody>
            //     </table>

            // </div>
        );
    }
}

export default track;