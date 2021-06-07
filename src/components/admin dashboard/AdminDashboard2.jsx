import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./navbar/Navbar";
import Sidebar from "../trainee dashboard/sidebar/Sidebar";
import Main from "../trainee dashboard/main/Main";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
      </div>

      <Main />
    </div>
  );
};

export default AdminDashboard;
