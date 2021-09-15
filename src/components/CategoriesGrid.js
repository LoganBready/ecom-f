import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, CardGroup } from "react-bootstrap";
import Header from "../components/Header";

import tacklethumb from "../images/thumbnail/tackle-thumbnail.jpg";
import bootsthumb from "../images/thumbnail/boots-thumbnail.jpg";
import clothingthumb from "../images/thumbnail/clothing-thumbnail.jpg";
import lureThumb from "../images/thumbnail/lures-thumbnail.jpg";
import reelThumb from "../images/thumbnail/reel-thumbnail.jpg";
import rodThumb from "../images/thumbnail/rod-thumbnail.jpg";

import { Link } from "react-router-dom";

export default function CategoriesGrid() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/category").then((res) => {});
  });

  return (
    <div>
      <Header />
      <h1 className="text-center">Product Categories</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={lureThumb} />
          <Card.Body>
            <Card.Title>
              <Link to="/lures">Lures</Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={rodThumb} />
          <Card.Body>
            <Card.Title>
              <Link to="/rods">Fishing Rods</Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={reelThumb} />
          <Card.Body>
            <Card.Title>
              <Link to="/reels">Reels</Link>
            </Card.Title>
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
            <Card.Title>
              <Link to="/tackle">Tackle</Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={bootsthumb} />
          <Card.Body>
            <Card.Title>
              <Link to="/boots">Boots</Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={clothingthumb} />
          <Card.Body>
            <Card.Title>
              <Link to="clothing">Clothing</Link>
            </Card.Title>
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
