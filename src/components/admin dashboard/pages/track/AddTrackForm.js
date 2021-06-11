import React, { Component } from "react";
import {Row,Col} from "react-bootstrap";

class AddTrack extends Component {
  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Track Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Track Title"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Code</label>
              <input
                className="form-control"
                type="text"
                placeholder="Track Code"
              />
            </div>
          </Col>
        </Row>

      </form>
    );
  }
}

export default AddTrack;
