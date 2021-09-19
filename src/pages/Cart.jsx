import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

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

  return (
    <div>
      <Header />
      <div>
        {entire.map((product, index) => (
          <div key={entire[index].product_id}>
            <p>{entire[index].product_name}</p>

            <p>{"$" + entire[index].product_price}</p>

            <p>{entire[index].product_description}</p>

            <button
              data-productid={entire[index].product_id}
              onClick={(e) => Delete(e.target.dataset.productid)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div>
        <span>Total: ${price}</span>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51Jb6SBEORtkApjhM5akn3b9YXklSJJjE3LLvxGZu5PRrPiwaQHdA7FpXihlnhc9hP1TUlMMsG8gPuKORxwCvPZqd00rw0aKV9f"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={price * 100}
        // name={entire[index].product_name}
      />
    </div>
  );
}
