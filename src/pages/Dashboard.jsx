import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../components/Header";

const Dashboard = ({ setAuth }) => {
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
    <>
      <Header />
      <h1>Dashboard</h1>
      <h2>Welcome, {name}!</h2>
      <button onClick={(e) => logout(e)}>Log Out</button>
    </>
  );
};

export default Dashboard;
