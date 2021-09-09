import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, CardGroup } from "react-bootstrap";
import Header from "../components/Header";

import tacklethumb from "../images/thumbnail/tackle-thumbnail.jpg";
import bootsthumb from "../images/thumbnail/boots-thumbnail.jpg";
import clothingthumb from "../images/thumbnail/clothing-thumbnail.jpg";

export default function CategoriesGrid() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/category").then((res) => {
      console.log(res.data.rows);
    });
  });

  return (
    <div>
      <Header />
      <h1 className="text-center">Product Categories</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Lures</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Fishing Rods</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Reels</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={tacklethumb} />
          <Card.Body>
            <Card.Title>Tackle</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={bootsthumb} />
          <Card.Body>
            <Card.Title>Boots</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={clothingthumb} />
          <Card.Body>
            <Card.Title>Clothing</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
