import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { Card, Button } from "react-bootstrap";

const Logout = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Logged Out Successfully!");
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="logoutHeader">
      <Header />
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "400px",
          maxWidth: "500px",
          padding: "15px",
          margin: "auto",
          top: "50%",
          marginTop: "100px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h1>Dashboard:</h1>
          </Card.Title>
          <Card.Text>
            <h2>Welcome, {name}!</h2>
          </Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          size="lg"
          style={{ width: "75%" }}
          onClick={(e) => logout(e)}
        >
          Log Out
        </Button>
      </Card>
    </div>
  );
};

export default Logout;
