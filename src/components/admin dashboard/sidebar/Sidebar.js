import "./Sidebar.css";
// import logo from '../logo.png'

import {BrowserRouter as Link} from "react-router-dom";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>TMS</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar_avatar">
           <img src="" alt=""/>
           <h5>UserName</h5>
        </div>
         
        <div className="sidebar__link active_menu_link">
        <i className="fa fa-home"></i>
          <a  href="/dashboard" >Dashboard</a>
        </div>
        
        <div className="sidebar__link active">
          <i className="fas fa-users" aria-hidden="true"></i>
          <a href="/trainees">Trainees</a>
         
        </div>
        <div className="sidebar__link">
          <i  className="fas fa-tasks"></i>
          <a href="/courses">Courses</a>
         
        </div>

        <div className="sidebar__link">
          <i  className="fas fa-cog"></i>
          <a href="/tracks">Tracks</a>
        </div>

        <div className="sidebar__link">
          <i  className="fas fa-tasks"></i>
          <a href="/assessment">Assessment</a>
        </div>

        <div className="sidebar__link">
          <i className="fas fa-file-alt"></i>
          <a href="/progress-report">Progress Report</a>
        </div>
       
     
       
        <div className="sidebar__logout p-4 fixed-bottom">
        <i className="fas fa-sign-out-alt" />
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
