import React from "react";
import Header from "../components/Header";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <Header />
      <span>This is the Home page.</span>
      <Products />
    </div>
  );
}
