import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, CardGroup } from "react-bootstrap";
import GetBootImage from "../components/GetBootImage";
import Header from "../components/Header";
import { toast } from "react-toastify";

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

  function addToCart() {
    const userId = localStorage.getItem("userId");

    const addToCart = axios
      .put(`http://localhost:5000/api/cart/${userId}`, {
        product_id: productId,
        user_id: userId,
      })
      .then((res) => {
        toast.success("Product Added Into Cart!");
      });
  }

  return (
    <div>
      <Header />
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title
              className="text-center"
              style={{ fontSize: "32px", fontWeight: "bold" }}
            >
              {item}
            </Card.Title>
            <Card.Text className="my-5" style={{ fontSize: "28px" }}>
              {description}
            </Card.Text>
            <Card.Text style={{ fontSize: "22px" }}>{"$" + price}</Card.Text>
            <Button className="my-4 w-100" onClick={addToCart}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <GetBootImage id={id} className="align-middle " />
        </Card>
      </CardGroup>
    </div>
  );
}
