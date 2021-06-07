import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { setUserSession } from "../../util/Common";
import { sessionService } from "redux-react-session";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    axios
      .post("https://amalitech-tms.herokuapp.com/auth/login", {
        email: "email",
        password: "password",
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (response.status === 200) {
          const userData = data.role;
          const token = data.token;
          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  if (data.role === "admin") {
                    props.history.push("/admin");
                  } else if (userData === "user") {
                    props.history.push("/trainee");
                  }
                })
                .catch((error) => console.error("error >>>", error));
            })
            .catch((error) => console.error("error >>> ", error));
        }
        // setLoading(false);
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
                onClick={() => {
                  handleLogin();
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
