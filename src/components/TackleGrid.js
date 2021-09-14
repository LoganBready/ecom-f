import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Header from "./Header";

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
        console.log(res.data.rows);
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
        <Card>
          <Card.Img variant="top" src={backPack} />
          <Card.Body>
            <Card.Title>
              {name}
              {"$" + price}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={plasticBox} />
          <Card.Body>
            <Card.Title>
              {name2}
              {"$" + price2}
            </Card.Title>
            <Card.Text>{description2}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={chestPack} />
          <Card.Body>
            <Card.Title>
              {name3}
              {"$" + price3}
            </Card.Title>
            <Card.Text>{description3}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={largeTackleBox} />
          <Card.Body>
            <Card.Title>
              {name4}
              {"$" + price4}
            </Card.Title>
            <Card.Text>{description4}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={waterProofBox} />
          <Card.Body>
            <Card.Title>
              {name5}
              {"$" + price5}
            </Card.Title>
            <Card.Text>{description5}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={flyBox} />
          <Card.Body>
            <Card.Title>
              {name6}
              {"$" + price6}
            </Card.Title>
            <Card.Text>{description6}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
