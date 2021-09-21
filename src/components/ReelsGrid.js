import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import oceanCaster from "../images/reels/reel-1.jpg";
import baitCaster from "../images/reels/reel-2.jpg";
import goldyLocks from "../images/reels/reel-3.jpg";
import blueMoon from "../images/reels/reel-4.jpg";
import abyss from "../images/reels/reel-5.jpg";
import silverBullet from "../images/reels/reel-6.jpg";

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
        setName(res.data.rows[12].product_name);
        setPrice(res.data.rows[12].product_price);
        setDescription(JSON.stringify(res.data.rows[12].product_description));
        setName2(res.data.rows[13].product_name);
        setPrice2(res.data.rows[13].product_price);
        setDescription2(JSON.stringify(res.data.rows[13].product_description));
        setName3(res.data.rows[14].product_name);
        setPrice3(res.data.rows[14].product_price);
        setDescription3(JSON.stringify(res.data.rows[14].product_description));
        setName4(res.data.rows[15].product_name);
        setPrice4(res.data.rows[15].product_price);
        setDescription4(JSON.stringify(res.data.rows[15].product_description));
        setName5(res.data.rows[16].product_name);
        setPrice5(res.data.rows[16].product_price);
        setDescription5(JSON.stringify(res.data.rows[16].product_description));
        setName6(res.data.rows[17].product_name);
        setPrice6(res.data.rows[17].product_price);
        setDescription6(JSON.stringify(res.data.rows[17].product_description));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <h1 className="text-center my-3">Reels</h1>
      <CardGroup className="mb-5 shadow">
        <Card
          as="a"
          href="/products/12"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={oceanCaster} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/12"
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
          as="a"
          href="/products/13"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={baitCaster} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/13"
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
          as="a"
          href="/products/14"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={goldyLocks} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/14"
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
          as="a"
          href="/products/15"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={blueMoon} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/15"
                style={{ textDecoration: "none", color: "black" }}
              >
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
          as="a"
          href="/products/16"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={abyss} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/16"
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
          as="a"
          href="/products/17"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={silverBullet} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/products/17"
                style={{ textDecoration: "none", color: "black" }}
                className="mb-5"
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
