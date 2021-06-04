import React from "react";
import './overview.css';


const Overview = () => {

    return (
        <div className="overview-container"  >
            <h1 className="overview-heading" >PROJECT OVERVIEW</h1>
            <p className="overview-text" >This project is about a Transcript Management System. It has two main parts;
            the Admin Dashboard and the Trainee Dashboard. <br></br>
            The Admin should be able to create, read, update and delete a user (Trainee),
            view their progress report and view the list courses the user has enrolled in. In the Course section, an Admin can create, read, update,
            and delete a user, enroll users and view their progress report. <br/><br/>
            Lastly the Admin should be able to create, read, update and delete a Track,
            the admin can add courses to specific tracks, enroll Users and view report of a specific Track.
            The User should be able to  view courses, view transcript, print transcript, sort results and view progress report. The Transcript Application
            is also going to have a home page where the Admin or User will Log in. 
            </p>
        </div>
    );

   
}


export default Overview;