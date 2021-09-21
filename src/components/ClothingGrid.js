import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import bassHoodie from "../images/clothing/clothing-1.jpg";
import halfGloves from "../images/clothing/clothing-2.jpg";
import longSleeveShirt from "../images/clothing/clothing-3.jpg";
import americaFishHat from "../images/clothing/clothing-4.jpg";
import goture from "../images/clothing/clothing-5.jpg";
import sharkShirt from "../images/clothing/clothing-6.jpg";

export default function LuresGrid() {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [name2, setName2] = useState([]);
  const [price2, setPrice2] = useState([]);
  const [description2, setDescription2] = useState([]);
  const [name3, setName3] = useState([]);
  const [price3, setPrice3] = useState([]);
  const [description3, setDescription3] = useState([]);
  const [name4, setName4] = useState([]);
  const [price4, setPrice4] = useState([]);
  const [description4, setDescription4] = useState([]);
  const [name5, setName5] = useState([]);
  const [price5, setPrice5] = useState([]);
  const [description5, setDescription5] = useState([]);
  const [name6, setName6] = useState([]);
  const [price6, setPrice6] = useState([]);
  const [description6, setDescription6] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log(res.data.rows);
        setName(res.data.rows[30].product_name);
        setPrice(res.data.rows[30].product_price);
        setDescription(JSON.stringify(res.data.rows[30].product_description));
        setName2(res.data.rows[31].product_name);
        setPrice2(res.data.rows[31].product_price);
        setDescription2(JSON.stringify(res.data.rows[31].product_description));
        setName3(res.data.rows[32].product_name);
        setPrice3(res.data.rows[32].product_price);
        setDescription3(JSON.stringify(res.data.rows[32].product_description));
        setName4(res.data.rows[33].product_name);
        setPrice4(res.data.rows[33].product_price);
        setDescription4(JSON.stringify(res.data.rows[33].product_description));
        setName5(res.data.rows[34].product_name);
        setPrice5(res.data.rows[34].product_price);
        setDescription5(JSON.stringify(res.data.rows[34].product_description));
        setName6(res.data.rows[35].product_name);
        setPrice6(res.data.rows[35].product_price);
        setDescription6(JSON.stringify(res.data.rows[35].product_description));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <h1 className="text-center my-3">Clothing</h1>
      <CardGroup className="mb-5 shadow">
        <Card
          as=""
          href="/products/30"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={bassHoodie} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/30"
                style={{ textDecoration: "none", color: "black" }}
              >
                {name}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price}</h3>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          as=""
          href="/products/31"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={halfGloves} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/31"
                style={{ textDecoration: "none", color: "black" }}
              >
                {name2}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price2}</h3>
            </Card.Text>
            <Card.Text>{description2}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          as=""
          href="/products/32"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={longSleeveShirt} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/32"
                style={{ textDecoration: "none", color: "black" }}
              >
                {name3}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price3}</h3>
            </Card.Text>
            <Card.Text>{description3}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card
          as=""
          href="/products/33"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={americaFishHat} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/33"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                {name4}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price4}</h3>
            </Card.Text>
            <Card.Text>{description4}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          as=""
          href="/products/34"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={goture} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/34"
                style={{ textDecoration: "none", color: "black" }}
              >
                {name5}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price5}</h3>
            </Card.Text>
            <Card.Text>{description5}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          as=""
          href="/products/35"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={sharkShirt} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/35"
                style={{ textDecoration: "none", color: "black" }}
              >
                {name6}
              </Link>
            </Card.Title>
            <Card.Text>
              <h3>{"$" + price6}</h3>
            </Card.Text>
            <Card.Text>{description6}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
