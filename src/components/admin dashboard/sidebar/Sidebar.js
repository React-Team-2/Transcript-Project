import "./Sidebar.css";
import{Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import Auth from '../../../Auth'

import {BrowserRouter as Link} from "react-router-dom";



const Sidebar = (props, { sidebarOpen, closeSidebar }) => {
let history = useHistory();

  const handleLogout = () => {
    Auth.logOut(()=>{
      history.push('/');
    })   
  }
  
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src='/assets/logo.png' alt="logo" />
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
          <a href="/admin/trainees">Trainees</a>
         
        </div>
        <div className="sidebar__link">
          <i  className="fas fa-tasks"></i>
          <a href="/admin/courses">Courses</a>
         
        </div>

        <div className="sidebar__link">
          <i  className="fas fa-cog"></i>
          <a href="/admin/tracks">Tracks</a>
        </div>

        <div className="sidebar__link">
          <i  className="fas fa-tasks"></i>
          <a href="/admin/assessment">Assessment</a>
        </div>

        <div className="sidebar__link">
          <i className="fas fa-file-alt"></i>
          <a href="/admin/progress-report">Progress Report</a>
        </div>
       
     
       
        <div className="sidebar__logout p-4 fixed-bottom">
        <i className="fas fa-sign-out-alt" />
              <Button variant="danger " type="submit" onClick={()=>{handleLogout()}}>
                Logout
              </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
