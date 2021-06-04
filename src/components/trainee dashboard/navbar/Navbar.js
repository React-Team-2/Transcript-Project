import "./Navbar.css";
// import avatar from "../../../../public/assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
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
      <div className="navbar__right">
       
       
        <a href="#">
          {/* <img width="30" src={avatar} alt="avatar" /> */}
        </a>
      
      </div>
      <div className="dropdown">
          <ul>
            <li>VictorAremu</li>
            <li>Batch 3</li>
            <li>Media & Design</li>
            <li><a>Log out</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
