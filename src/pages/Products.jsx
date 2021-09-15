import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, CardGroup } from "react-bootstrap";
import GetBootImage from "../components/GetBootImage";

export default function Products() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productId, setProductId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      //   console.log(res.data.rows[id].product_price);
      setItem(res.data.rows[id].product_name);
      setPrice(res.data.rows[id].product_price);
      setDescription(res.data.rows[id].product_description);
      setProductId(res.data.rows[id].product_id);
    });
  }, []);
  // function addProduct() {
  //   const addParams = { user_id: "26", product_id: 0, quantity: 3 };
  //   axios
  //     .post("http://localhost:5000/api/cart/:id", addParams)
  //     .then((res) => {
  //       return console.log("Success!");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }

  return (
    <div>
      <CardGroup>
        <Card>
          <GetBootImage id={id} />
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">{item}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{"$" + price}</Card.Text>
            <Button>Add to Cart</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
