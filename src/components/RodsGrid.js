import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Header from "./Header";

import midNightFurry from "../images/rods/rod-1.jpg";
import oceanTech from "../images/rods/rod-2.jpg";
import twoSplit from "../images/rods/rod-3.jpg";
import orangeRoam from "../images/rods/rod-4.jpg";
import flyRod from "../images/rods/rod-5.jpg";
import fishingPole from "../images/rods/rod-6.jpg";
import { Link } from "react-router-dom";

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
        setName(res.data.rows[6].product_name);
        setPrice(res.data.rows[6].product_price);
        setDescription(JSON.stringify(res.data.rows[6].product_description));
        setName2(res.data.rows[7].product_name);
        setPrice2(res.data.rows[7].product_price);
        setDescription2(JSON.stringify(res.data.rows[7].product_description));
        setName3(res.data.rows[8].product_name);
        setPrice3(res.data.rows[8].product_price);
        setDescription3(JSON.stringify(res.data.rows[8].product_description));
        setName4(res.data.rows[9].product_name);
        setPrice4(res.data.rows[9].product_price);
        setDescription4(JSON.stringify(res.data.rows[9].product_description));
        setName5(res.data.rows[10].product_name);
        setPrice5(res.data.rows[10].product_price);
        setDescription5(JSON.stringify(res.data.rows[10].product_description));
        setName6(res.data.rows[11].product_name);
        setPrice6(res.data.rows[11].product_price);
        setDescription6(JSON.stringify(res.data.rows[11].product_description));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <h1 className="text-center my-3">Rods</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={midNightFurry} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/6">{name}</Link>
              {"$" + price}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={oceanTech} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/7">{name2}</Link>
              {"$" + price2}
            </Card.Title>
            <Card.Text>{description2}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={twoSplit} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/8">{name3}</Link>
              {"$" + price3}
            </Card.Title>
            <Card.Text>{description3}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={orangeRoam} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/9">{name4}</Link>
              {"$" + price4}
            </Card.Title>
            <Card.Text>{description4}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={flyRod} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/10">{name5}</Link>
              {"$" + price5}
            </Card.Title>
            <Card.Text>{description5}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={fishingPole} />
          <Card.Body>
            <Card.Title>
              <Link to="/products/11">{name6}</Link>
              {"$" + price6}
            </Card.Title>
            <Card.Text>{description6}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
