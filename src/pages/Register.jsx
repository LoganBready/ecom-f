// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("userId", parseRes.userId);
        setAuth(true);
        toast.success("Registered Successfully!");
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
          width: "480px",
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
            <h1 className="mt-5 text-center">Register</h1>
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
            <Form.Group size="lg" controlId="name">
              <Form.Label>
                <h4>Name</h4>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                className="form-control my-3"
              />
            </Form.Group>
            <Button
              block
              size="lg"
              type="submit"
              className="btn  btn-block w-100"
            >
              Register
            </Button>
            <h4 className="my-3">
              Already Have An Accout? <Link to="/login">Login</Link>
            </h4>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Register;
