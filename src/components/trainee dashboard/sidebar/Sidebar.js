import "./Sidebar.css";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Auth from '../../../Auth'
// import logo from '../../../../public/assets/logo.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  let history = useHistory();

  const handleLogout = () => {
    Auth.logOut(()=>{
      history.push('/login');
    })   
  }
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
          <img src="" alt="" />
          <h5>UserName</h5>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/trainee/dashboard">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <i className="fas fa-book-reader" aria-hidden="true"></i>
          <a href="/trainee/courses">Courses Enrolled</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-poll-h"></i>
          <a href="/trainee/transcript">Transcript</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-columns"></i>
          <a href="/trainee/tracks">Tracks</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-cog"></i>
          <a href="/trainee/others">Others</a>
        </div>

        <div className="sidebar__logout">
          <i className="fas fa-sign-out-alt" />
          <Button
            variant="danger "
            type="submit"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
