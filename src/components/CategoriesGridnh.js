import React, { useEffect } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";

import tacklethumb from "../images/thumbnail/tackle-thumbnail.jpg";
import bootsthumb from "../images/thumbnail/boots-thumbnail.jpg";
import clothingthumb from "../images/thumbnail/clothing-thumbnail.jpg";
import lureThumb from "../images/thumbnail/lures-thumbnail.jpg";
import reelThumb from "../images/thumbnail/reel-thumbnail.jpg";
import rodThumb from "../images/thumbnail/rod-thumbnail.jpg";

import { Link } from "react-router-dom";

export default function CategoriesGrid() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/category").then((res) => {});
  });

  return (
    <div>
      <h1 className="text-center">Product Categories</h1>
      <CardGroup className="my-5 shadow">
        <Card
          as="a"
          href="/lures"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={lureThumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/lures"
                style={{ textDecoration: "none", color: "black" }}
              >
                Lures
              </Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          as="a"
          href="/rods"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={rodThumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/rods"
                style={{ textDecoration: "none", color: "black" }}
              >
                Fishing Rods
              </Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          as="a"
          href="/reels"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img variant="top" src={reelThumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/reels"
                style={{ textDecoration: "none", color: "black" }}
              >
                Reels
              </Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card
          as="a"
          href="/tackle"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={tacklethumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/tackle"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tackle
              </Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          as="a"
          href="/boots"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={bootsthumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="/boots"
                style={{ textDecoration: "none", color: "black" }}
              >
                Boots
              </Link>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          as="a"
          href="/clothing"
          style={{ textDecoration: "none", color: "black" }}
          className="mb-5 shadow"
        >
          <Card.Img variant="top" src={clothingthumb} />
          <Card.Body>
            <Card.Title style={{ fontFamily: "Sora" }}>
              <Link
                to="clothing"
                style={{ textDecoration: "none", color: "black" }}
              >
                Clothing
              </Link>
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
