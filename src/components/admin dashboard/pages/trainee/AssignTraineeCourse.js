import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AssignTraineeCourse extends Component {
  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <label className="form-label">Trainee Name</label>
            <select className="form-control">
              <option>Victor Aremu</option>
              <option>Agbesi Amenyo</option>
              <option>Bismark Frimpong</option>
              <option>Kwabena Dwamena</option>
              <option>Jefferson Addai-Poku</option>
            </select>
          </Col>
          <Col>
            <label className="form-label">Course</label>
            <select className="form-control">
              <option></option>
              <option>Programming with Java</option>
              <option>Creative Media</option>
              <option>ReactJs</option>
              <option>Testing With Cypress</option>
              <option>Programming with Python</option>
            </select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label className="form-label">Course Code</label>
            <input
              className="form-control"
              type="text"
              value="001"
              disabled
              placeholder="Course Code"
            />
          </Col>
          <Col>
            <div>
              <label className="form-label">Track</label>
              <select className="form-control">
                <option>Foundation</option>
                <option>Media & Design</option>
                <option>Software Development & Evolution </option>
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

export default AssignTraineeCourse;
