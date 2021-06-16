import React, { Component } from "react";
import {Row,Col} from "react-bootstrap";

class AddTrack extends Component {
  render() {
   
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
           
              <label className="form-label">Track Name</label>
              <input
              value={this.props.trackName}
                className="form-control"
                type="text"
                placeholder="Track Title"
              />
           
          </Col>
          <Col>
            
              <label className="form-label">Track Master</label>
              <input
               value={this.props.trackMaster}
                className="form-control"
                type="text"
                placeholder="Track Master"
              />
            
          </Col>
        </Row>

      </form>
    );
  }
}

export default AddTrack;
