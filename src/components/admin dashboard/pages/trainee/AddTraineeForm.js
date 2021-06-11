import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AddTrainee extends Component {
  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Firstname</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter FirstName"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Lastname</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Lastname"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Track</label>
              <select className="form-select">
                <option>Foundation</option>
                <option>Media & Design</option>
                <option>Software Development & Evolution</option>
                <option>Machine Learning & Data Analytics</option>
                <option>Salesforce Commerce Cloud Development</option>
              </select>
            </div>
          </Col>
        </Row>
      
      </form>
    );
  }
}

export default AddTrainee;
