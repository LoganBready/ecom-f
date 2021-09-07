import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products);
  const mappedProducts = products.map((key, index) => {
    return (
      <div>
        <ul>
          <li key={index}>{key.product_name}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <p>{mappedProducts}</p>
    </div>
  );
}
