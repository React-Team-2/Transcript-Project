import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'

const Navbar = ({ sidebarOpen, openSidebar }) => {

  const handleLogout =()=>{

  }
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       
        <a className="active_link" href="#">
         Trainee
        </a>
      </div>
      {/* <div className="navbar__right">   
        <a href="#">
          <img width="30" src='/assets/avatar.svg' alt="avatar" />
        </a>
      </div>
      <div className="dropdown">
          <ul>
            <li>VictorAremu</li>
            <li>Batch 3</li>
            <li>Media & Design</li>
            <Button onClick={()=>{handleLogout()}}> Log out </Button>
          </ul>
        </div> */}

        <div className="dropdown mr-1">
          <button type="button" id="dropDownButton" className="btn mr-1 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
            <img width="30" src='/assets/avatar.svg' alt="avatar" />
          </button>
          <div className="dropdown-menu mr-5" aria-labelledby="dropDownButton">
              <a href="#" className="dropdown-item">VictorAremu</a>
              <a href="#" className="dropdown-item">Batch 3</a>
              <a href="#" className="dropdown-item">Media & Design</a>
              <a href="#" className="dropdown-item"><Button onClick={()=>{handleLogout()}}>sign out</Button></a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
