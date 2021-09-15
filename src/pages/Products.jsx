import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import GetBootImage from "../components/GetBootImage";

export default function Products() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      //   console.log(res.data.rows[id].product_price);
      setItem(res.data.rows[id].product_name);
      setPrice(res.data.rows[id].product_price);
      setDescription(res.data.rows[id].product_description);
      console.log(item);
    });
  }, []);

  return (
    <div>
      {item}
      {price}
      {description}
      <GetBootImage id={id} />
      <Button>Add to Cart</Button>
    </div>
  );
}
