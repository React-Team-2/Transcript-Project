import React, { Component } from "react";

class AddCourse extends Component {
  render() {
    return (
      /*ADD COURSE HERE*/

      <div className="row">
        <div>

          <form className="form">
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Course</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Course Title"
                />
              </div>
              <div className="col">
                <label className="form-label">Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Course Code"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label for="tracks" className="form-label">
                  Track
                </label>
                <select name="tracks" className="form-select" multiple>
                  <option value="foundation" className="mb-1">
                    Foundation
                  </option>
                  <option value="media" className="mb-1" >Media & Design</option>
                  <option value="software" className="mb-1">Software Development & Evolution</option>
                  <option value="machinelearn" className="mb-1" >Machine Learning & Data Analytics</option>
                  <option value="salesforce" className="mb-1" >Salesforce Commerce Cloud</option>
                </select>
                <p className="fs-6 text-muted">Hold ctrl to select multiple tracks</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCourse;
