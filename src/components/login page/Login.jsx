import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import Auth from '../../Auth';


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email);
    console.log(password);


    const data = {
      email: email,
      password: password,
    }

    axios
      .post("https://amalitech-tms.herokuapp.com/auth/login", data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        // if (response.status === 200) {
        //   const userData = data.role.role_title;
        //   const token = data.token;
        //   sessionService
        //     .saveSession(token)
        //     .then(() => {
        //       sessionService
        //         .saveUser(userData)
        //         .then(() => {
        //           console.log(userData)
        //           if (data.role.role_title === "admin") {
        //             console.log(userData)
        //             props.history.push("/admin");
        //           } else if (userData === "user") {
        //             props.history.push("/trainee");
        //           }
        //         })
        //         .catch((error) => console.error("error >>>", error));
        //     })
        //     .catch((error) => console.error("error >>> ", error));
        // }

        if (response.status === 200) {
          const token = data.token;
          const roleTitle = data.role.role_title;
          console.log(token);
          console.log(roleTitle);
          localStorage.setItem('token', token);
          localStorage.setItem('roleTitle', roleTitle);

            if(roleTitle === 'admin'){
              Auth.login(()=>{
                props.history.push("/admin");
              })
            }
            else if (roleTitle === 'user'){
              Auth.login(()=>{
                props.history.push('/trainee')
              })
            }
        }

        // // setLoading(false);
        // setUserSession(response.data.token, response.data.user);
        // props.history.push("/admin");
        // console.log("response >>> ", response);
      })
      .catch((error) => {
        console.error("error >>>", error);
      });
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <img className="icon-img" src="/assets/user.svg" alt="icon" />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary btn-block"
                type="submit"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Login
              </Button>

              {/* <div className="text-left mt-3">
                                <a href="#"><small className="reset">Password Reset</small></a> II
                                <a href="#"><small className="reset ml-2">Quick Recover</small></a>
                            </div> */}
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src="/assets/login.svg" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
