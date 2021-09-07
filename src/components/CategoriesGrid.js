import React from "react";
import { Card, Col, Row, CardGroup } from "react-bootstrap";
import luresthumb from "../images/thumbnail/lures-thumbnail.jpg";
import reelsthumb from "../images/thumbnail/reels-thumbnail.jpg";
import rodsthumb from "../images/thumbnail/rods-thumbnail.jpg";
import tacklethumb from "../images/thumbnail/tackle-thumbnail.jpg";
import bootsthumb from "../images/thumbnail/boots-thumbnail.jpg";
import clothingthumb from "../images/thumbnail/clothing-thumbnail.jpg";

export default function CategoriesGrid() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={luresthumb} />
          <Card.Body>
            <Card.Title>Lures</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={rodsthumb} />
          <Card.Body>
            <Card.Title>Fishing Rods</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={reelsthumb} />
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
