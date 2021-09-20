import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";
import GetBootImage from "../components/GetBootImage";

export default function Cart() {
  const [entire, setEntire] = useState([]);
  const [empty, setEmpty] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const userId = localStorage.getItem("userId");

  // const sendThis = { user_id: userId };
  let dataArr = [];

  useEffect(() => {
    const newData = axios
      .get(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => {
        for (let i = 0; i < res.data.rows.length; i++) {
          dataArr.push(res.data.rows[i]);
        }
      })
      .finally(() => {
        setEntire(dataArr);

        setTimeout(() => {}, 1700);
      });
    function returnAmount() {
      const userId = localStorage.getItem("userId");
      axios
        .get(`http://localhost:5000/api/user/price/${userId}`)
        .then((res) => {
          setPrice(res.data.rows[0].sum);
        });
    }
    returnAmount();
  }, []);
  function Delete(product_id) {
    // console.log(product_id);
    const userId = localStorage.getItem("userId");

    const sendThis = { product_id: product_id };

    axios
      .delete(
        `http://localhost:5000/api/cart/${userId}/${product_id}`,
        sendThis
      )
      .then((res) => {
        // console.log(res);
        toast.success("Product Deleted From Cart!");
        axios.get(`http://localhost:5000/api/cart/${userId}`).then((res) => {
          for (let i = 0; i < res.data.rows.length; i++) {
            dataArr.push(res.data.rows[i]);
          }
          setEntire(dataArr);
        });
        axios
          .get(`http://localhost:5000/api/user/price/${userId}`)
          .then((res) => {
            setPrice(res.data.rows[0].sum);
          });
        return console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleToken(token, addresses) {
    // console.log({ token, addresses });
  }
  function DisplayPrice() {
    if (price == null) {
      return (
        <div>
          <h3>Your Cart Is Empty.</h3>
        </div>
      );
    } else {
      return <h3>Total: ${price}</h3>;
    }
  }

  if (price == null || 0) {
    return (
      <div>
        <Header />
        <h2 className="my-5 text-center">Your Cart Is Empty.</h2>
        <h2 className="my-2 text-center">
          Go <Link to="/category">Shopping!</Link>
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <CardGroup>
          <Card className="my-5">
            <Card.Body>
              {entire.map((product, index) => (
                <div key={entire[index].product_id}>
                  <Card.Title>
                    <h2>{entire[index].product_name}</h2>
                  </Card.Title>

                  <Card.Text className="my-3">
                    <h4>{"$" + entire[index].product_price}</h4>
                  </Card.Text>
                  <Card.Text>
                    <h3>{entire[index].product_description}</h3>
                  </Card.Text>

                  <Button
                    data-productid={entire[index].product_id}
                    onClick={(e) => Delete(e.target.dataset.productid)}
                    className="my-3"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </Card.Body>

            <StripeCheckout
              stripeKey="pk_test_51Jb6SBEORtkApjhM5akn3b9YXklSJJjE3LLvxGZu5PRrPiwaQHdA7FpXihlnhc9hP1TUlMMsG8gPuKORxwCvPZqd00rw0aKV9f"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={price * 100}
              successUrl="http://localhost:3000/thankyou"
            />
          </Card>
        </CardGroup>
        <DisplayPrice />
      </div>
    );
  }
}
