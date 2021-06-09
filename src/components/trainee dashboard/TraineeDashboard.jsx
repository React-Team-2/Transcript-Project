import { useState } from "react";
import Main from "./main/Main";
import NavbarCom from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


const App = () => {
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
        <div className="container-fluid">
        <NavbarCom sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main/>
        </div>
      </div>
    </div>
  );
};

export default App;
