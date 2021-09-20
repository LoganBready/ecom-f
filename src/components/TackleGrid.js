import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import backPack from "../images/tackle/tackle-1.jpg";
import plasticBox from "../images/tackle/tackle-2.jpg";
import chestPack from "../images/tackle/tackle-3.jpg";
import largeTackleBox from "../images/tackle/tackle-4.jpg";
import waterProofBox from "../images/tackle/tackle-5.jpg";
import flyBox from "../images/tackle/tackle-6.jpg";

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
        setName(res.data.rows[18].product_name);
        setPrice(res.data.rows[18].product_price);
        setDescription(JSON.stringify(res.data.rows[18].product_description));
        setName2(res.data.rows[19].product_name);
        setPrice2(res.data.rows[19].product_price);
        setDescription2(JSON.stringify(res.data.rows[19].product_description));
        setName3(res.data.rows[20].product_name);
        setPrice3(res.data.rows[20].product_price);
        setDescription3(JSON.stringify(res.data.rows[20].product_description));
        setName4(res.data.rows[21].product_name);
        setPrice4(res.data.rows[21].product_price);
        setDescription4(JSON.stringify(res.data.rows[21].product_description));
        setName5(res.data.rows[22].product_name);
        setPrice5(res.data.rows[22].product_price);
        setDescription5(JSON.stringify(res.data.rows[22].product_description));
        setName6(res.data.rows[23].product_name);
        setPrice6(res.data.rows[23].product_price);
        setDescription6(JSON.stringify(res.data.rows[23].product_description));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <h1 className="text-center my-3">Tackle</h1>
      <CardGroup>
        <Card
          as="a"
          href="/products/18"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={backPack} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/18"
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
          href="/products/19"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={plasticBox} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/19"
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
          href="/products/20"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={chestPack} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/20"
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
          href="/products/21"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={largeTackleBox} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/21"
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
          href="/products/22"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={waterProofBox} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/22"
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
          href="/products/23"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={flyBox} />
          <Card.Body>
            <Card.Title>
              <Link
                to="/products/23"
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
