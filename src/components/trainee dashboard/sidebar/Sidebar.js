import "./Sidebar.css";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {useEffect} from "react";
import * as actionCreator from "../../../store/actions/action";
import Auth from '../../../Auth';
import {connect} from "react-redux";
// import logo from '../../../../public/assets/logo.png'

const Sidebar = (props) => {
  useEffect(() =>{
    props.getUserDetails(localStorage.getItem('userId'));
  }, [])

  let sidebarOpen = props.sidebarOpen;
  let closeSidebar = props.closeSidebar;
  let history = useHistory();



  const handleLogout = () => {
    Auth.logOut(()=>{
      history.push('/login');
    })   
  }
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
          <h1>TMS</h1>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar_avatar">
          <img src="./assets/images/vic.jpg" alt="" />
          <h5>{props.user ? props.user.firstname : "username"}</h5>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/trainee">Dashboard</a>
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
const mapStateToProps = (state) => {
  return {
    course: state.allCourses.courses,
    tracks: state.allTraineeTracks.tracks,
    user:state.user.user

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails:(user)=>dispatch(actionCreator.getUserDetails(user))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
