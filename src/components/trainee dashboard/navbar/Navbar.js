import React from "react";
import Auth from '../../../Auth';
import {useHistory} from 'react-router-dom';

import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";

const NavbarCom = () => {

  let history = useHistory();   
  const handleLogout = () => {
    Auth.logOut(()=>{
      history.push('/login');
    })   
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/trainee">Trainee</Navbar.Brand>
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
              <Button className="mx-auto" onClick={()=>{handleLogout()}}>Log out</Button>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarCom;
