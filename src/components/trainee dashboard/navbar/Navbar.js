// import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'

// const Navbar = ({ sidebarOpen, openSidebar }) => {
const Navbar = () => {

  const handleLogout =()=>{

  }
  return (
    
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    // <div classNameName="container-fluid">
    // <div classNameName="nav_icon" onClick={() => openSidebar()}>
    //     <i classNameName="fa fa-bars" aria-hidden="true"></i>
    //   </div>
    //   <div classNameName="nav-item">
       
    //     <a classNameName="nav-link" href="#">
    //      Trainee
    //     </a>
    //   </div>

    
    // </div>

    // </nav>
    <div className="d-flex">
      <a className="navbar-brand" href="#">Trainee</a>
      <div className="dropdown mr-1 ">
        <button type="button" id="dropDownButton" className="btn me-1 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="-100,10">
          <img width="30" src='/assets/avatar.svg' alt="avatar" />
        </button>
        <div className="dropdown-menu mr-5" aria-labelledby="dropDownButton">
            <a href="#" className="dropdown-item">VictorAremu</a>
            <a href="#" className="dropdown-item">Batch 3</a>
            <a href="#" className="dropdown-item">Media & Design</a>
            <a href="#" className="dropdown-item"><Button onClick={()=>{handleLogout()}}>sign out</Button></a>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
