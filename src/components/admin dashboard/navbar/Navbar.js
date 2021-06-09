import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Container
} from "react-bootstrap";

const NavbarCom = () => {

  const handleLogout = () =>{

  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/trainee">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown drop="left" title={<img width="30" src='/assets/avatar.svg' alt="avatar" />} id="basic-nav-dropdown">
              <NavDropdown.Item disabled className="text-dark">Victor Aremu</NavDropdown.Item>
              <NavDropdown.Item disabled className="text-dark">
                Batch 3
              </NavDropdown.Item>
              <NavDropdown.Item disabled className="text-dark">Media & Design</NavDropdown.Item>
              
              <div className="w-full text-center mt-2">
              <Button className="mx-auto" onClick={()=>{handleLogout()}}>sign out</Button>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarCom;
