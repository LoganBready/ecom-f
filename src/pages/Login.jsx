import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("userId", parseRes.userId);

        setAuth(true);
        toast.success("Logged In Successfully!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Header />
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "480",
          height: "650px",
          maxWidth: "900px",
          padding: "15px",
          margin: "auto",
          top: "50%",
          marginTop: "100px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h1 className="mt-5 text-center">Log In</h1>
          </Card.Title>
          <Form
            onSubmit={onSubmitForm}
            className="my-3"
            style={{ width: "460px" }}
          >
            <Form.Group size="lg" controlId="email">
              <Form.Label>
                <h4>Email</h4>
              </Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control my-3"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>
                <h4>Password</h4>
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                className="form-control my-3"
              />
            </Form.Group>
            <Button
              block
              size="lg"
              type="submit"
              className="btn  btn-block my-3"
              style={{
                width: "100%",
              }}
            >
              Login
            </Button>
          </Form>
          <Card.Text>
            <span>
              Neeed An Account? <Link to="/register">Register</Link>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
