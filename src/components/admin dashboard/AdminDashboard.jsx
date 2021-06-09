import { useState } from "react";
import Main from "./main/Main";
import NavbarCom from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="main-wrapper">
      <div className="d-flex">
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <div className="container">
        <NavbarCom sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
