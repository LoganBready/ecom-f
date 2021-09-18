import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function Cart() {
  const [entire, setEntire] = useState([]);
  const [empty, setEmpty] = useState("");
  const userId = localStorage.getItem("userId");

  // const sendThis = { user_id: userId };

  useEffect(() => {
    let dataArr = [];
    const newData = axios
      .get(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => {
        console.log(res.data);
        // const nam = res.data.rows[0].product_name;

        if (res.data.rows == []) {
          return res.json("Your cart is empty!");
          console.log(empty);
        } else {
          for (let i = 0; i < res.data.rows.length; i++) {
            dataArr.push(res.data.rows[i]);
          }
        }
      })
      .finally(() => {
        setEntire(dataArr);

        setTimeout(() => {}, 1700);
      });
  }, []);

  function Delete(product_id) {
    console.log(product_id);
    const userId = localStorage.getItem("userId");

    const sendThis = { product_id: product_id };

    axios
      .delete(
        `http://localhost:5000/api/cart/${userId}/${product_id}`,
        sendThis
      )
      .then((res) => {
        console.log(res);
        return console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header />
      <div>
        {entire.map((product, index) => (
          <div key={entire[index].product_id}>
            <p>{entire[index].product_name}</p>

            <p>{entire[index].product_price}</p>

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
    </div>
  );
}
