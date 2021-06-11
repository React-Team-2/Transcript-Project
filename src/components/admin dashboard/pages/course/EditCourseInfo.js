import React from "react";
import {Row,Col} from "react-bootstrap"

export default function EditCourseInfo() {
  return (
    <form className="form">
      <Row className="mb-3">
        <Col>
          <div>
            <label className="form-label">CourseTitle</label>
            <input className="form-control" type="text" />
          </div>
        </Col>
        <Col>
          <div>
            <label className="form-label">Course Code</label>
            <input className="form-control" type="text" placeholder="" />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div>
            <label className="form-label">Date Created</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter email"
            />
          </div>
        </Col>
      </Row>
    </form>
  );
}
