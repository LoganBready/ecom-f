import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function Cart() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const userId = localStorage.getItem("userId");

  const sendThis = { user_id: userId };

  const newData = axios
    .get("http://localhost:5000/api/cart/:id", sendThis)
    .then((res) => {
      console.log(res.data);
    }, []);

  let data = [
    { id: 1, desc: "lorem ipsum", name: "product 1" },
    { id: 2, desc: "lorem ipsum", name: "product 1" },
    { id: 3, desc: "lorem ipsum", name: "product 1" },
  ];

  const mappedData = data.map((key, item) => (
    <li key={item}>
      {key.id}: {key.name} {key.desc}
    </li>
  ));

  return (
    <div>
      <Header />
      <p>Cart</p>
      <ul>{mappedData}</ul>
      {/* <ul>{mappedNewData}</ul> */}
    </div>
  );
}
