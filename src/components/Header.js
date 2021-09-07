import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export default function Header({ setAuth }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className="">
      <Container>
        <Navbar.Brand href="/">The Fishing Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Lures">
              <NavDropdown.Item href="/">Blue Deep Diver</NavDropdown.Item>
              <NavDropdown.Item href="/">Pink Lady</NavDropdown.Item>
              <NavDropdown.Item href="/">Shad Chad</NavDropdown.Item>
              <NavDropdown.Item href="/">Yellow Fish</NavDropdown.Item>
              <NavDropdown.Item href="/">Minnow</NavDropdown.Item>
              <NavDropdown.Item href="/">Green Pike</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rods">
              <NavDropdown.Item href="/">Midnight Furry</NavDropdown.Item>
              <NavDropdown.Item href="/">Ocean Tech</NavDropdown.Item>
              <NavDropdown.Item href="/">Two Split</NavDropdown.Item>
              <NavDropdown.Item href="/">Orange Roam</NavDropdown.Item>
              <NavDropdown.Item href="/">Fly Rod</NavDropdown.Item>
              <NavDropdown.Item href="/">Fishing Pole</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reels">
              <NavDropdown.Item href="/">Ocean Caster</NavDropdown.Item>
              <NavDropdown.Item href="/">Bait Caster</NavDropdown.Item>
              <NavDropdown.Item href="/">Goldy Locks</NavDropdown.Item>
              <NavDropdown.Item href="/">Blue Moon</NavDropdown.Item>
              <NavDropdown.Item href="/">Abyss</NavDropdown.Item>
              <NavDropdown.Item href="/">Silver Bullet</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tackle">
              <NavDropdown.Item href="/">Back Pack</NavDropdown.Item>
              <NavDropdown.Item href="/">Plastic Box</NavDropdown.Item>
              <NavDropdown.Item href="/">Chest Pack</NavDropdown.Item>
              <NavDropdown.Item href="/">Large Tackle Box</NavDropdown.Item>
              <NavDropdown.Item href="/">Water Proof Box</NavDropdown.Item>
              <NavDropdown.Item href="/">Fly Box</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Boots">
              <NavDropdown.Item href="/">Jungle Boots</NavDropdown.Item>
              <NavDropdown.Item href="/">The Boot</NavDropdown.Item>
              <NavDropdown.Item href="/">Sims Foot</NavDropdown.Item>
              <NavDropdown.Item href="/">Reddington Grey</NavDropdown.Item>
              <NavDropdown.Item href="/">Booties</NavDropdown.Item>
              <NavDropdown.Item href="/">Wrapth Tech</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Clothing">
              <NavDropdown.Item href="/">Bass Hoodie</NavDropdown.Item>
              <NavDropdown.Item href="/">Half Gloves</NavDropdown.Item>
              <NavDropdown.Item href="/">Long Sleeve Shirt</NavDropdown.Item>
              <NavDropdown.Item href="/">America Fish Hat</NavDropdown.Item>
              <NavDropdown.Item href="/">Goture</NavDropdown.Item>
              <NavDropdown.Item href="/">Shark Shirt</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">Cart</Nav.Link>
            <Button variant="light" href="/login">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
