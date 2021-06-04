import React from 'react'

export default function EditTraineeInfo() {
    return (
        <div className="row">
        


        <form className="form">
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">FirstName</label>
              <input
                className="form-control"
                type="text"
                value="Victor"
                
              />
            </div>
            <div className="col">
              <label className="form-label">LastName</label>
              <input
                className="form-control"
                type="text"
                value="Aremu"
                placeholder=""
              />
            </div>
          </div>
          <div className="row mb-3">
          <div className="col">
                <label className="form-label">Current Track</label>
              <select className="form-select">
                <option>Foundation</option>
                <option>Media & Design</option>
                <option>Software Development & Evolution</option>
                <option>Machine Learning & Data Analytics</option>
                <option>Salesforce Commerce Cloud Development</option>
              </select>
                </div>

            <div className="col">
              <label className="form-label">Date Created</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
              />
            </div>
          
          </div>
          
        </form>
      
    </div>
    )
}
