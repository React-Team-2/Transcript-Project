import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class CourseForm extends Component {
  render() {
    const tracks = () => {
      return this.props.tracks.map((track) => {
        return (
          <option value={track.id} className="mb-1">
            {track.track_name}
          </option>
        );
      });
    };
    return (
      /*ADD COURSE HERE*/

   
        <form className="form">
          <Row className="mb-3">
            <Col>
              <div className="col">
                <label className="form-label">Course</label>
                <input
                  defaultValue={this.props.courseTitle}
                  className="form-control"
                  type="text"
                  placeholder="Course Title"
                />
              </div>
            </Col>
            <Col>
              <div className="col">
                <label className="form-label">Code</label>
                <input
                  defaultValue={this.props.courseCode}
                  className="form-control"
                  type="text"
                  placeholder="Course Code"
                />
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
            
              <label for="tracks" className="form-label">
                Track
              </label>
              <select name="tracks" className="form-control" multiple>
               
                {tracks}
              </select>
              <p className="fs-6 text-muted">
                Hold ctrl to select multiple tracks
              </p>
            
            </Col>
          </Row>
          
        
        </form>
     
    );
  }
}

export default CourseForm;
