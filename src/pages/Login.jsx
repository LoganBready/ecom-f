import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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
        console.log(typeof localStorage.setItem("userId", parseRes.userId));
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
      <h1 className="mt-5 text-center">Log In</h1>
      <Form onSubmit={onSubmitForm} className=" w-50 p-3 ">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            className="form-control my-3"
          />
        </Form.Group>
        <Button block size="lg" type="submit" className="btn  btn-block">
          Login
        </Button>
        <Link to="/register">Register</Link>
      </Form>
    </>
  );
};

export default Login;
