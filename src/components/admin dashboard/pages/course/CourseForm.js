import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AddCourse extends Component {
  constructor(props) {
    super(props);
  }

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
        <Row>
          <Col>
            <div>
              <label className="form-label">Course</label>
              <input
                value={this.props.courseTitle}
                className="form-control"
                type="text"
                placeholder="Course Title"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Code</label>
              <input
                value={this.props.courseCode}
                className="form-control"
                type="text"
                placeholder="Course Code"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <label for="tracks" className="form-label">
                Track
              </label>
              <select name="tracks" className="form-select" multiple>
                {tracks}
              </select>
              <p className="fs-6 text-muted">
                Hold ctrl to select multiple tracks
              </p>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}

export default CourseForm;
