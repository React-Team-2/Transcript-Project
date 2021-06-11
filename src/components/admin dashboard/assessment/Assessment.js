import React, { Component } from 'react';
import Records from './Records';
import FilterForm from './FilterForm';

class Assessment extends Component {
    render() {
       this.data= Records()
     
        return (
            <div className="container p-5">
                <FilterForm/>
                 <table className="table table-striped table-hover mt-5">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Trainee</th>
              <th>Date</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.data.map((course) => {
            
              return (
                <tr>
                  <td>{course.id}</td>
                  <td>{course.fullName}</td>
                  <td>{course.date}</td>
                  <td>{course.score}</td>
                  <td>
                    <i className="far fa-edit text-success" />
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
}

export default Assessment;