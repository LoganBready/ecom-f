import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Header({ setAuth }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      sticky="top"
      className=""
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">The Fishing Store</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Lures">
              <NavDropdown.Item href="/products/0">
                Blue Deep Diver
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/1">Pink Lady</NavDropdown.Item>
              <NavDropdown.Item href="/products/2">Shad Chad</NavDropdown.Item>
              <NavDropdown.Item href="/products/3">
                Yellow Fish
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/4">Minnow</NavDropdown.Item>
              <NavDropdown.Item href="/products/5">Green Pike</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rods">
              <NavDropdown.Item href="/products/6">
                Midnight Furry
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/7">Ocean Tech</NavDropdown.Item>
              <NavDropdown.Item href="/products/8">Two Split</NavDropdown.Item>
              <NavDropdown.Item href="/products/9">
                Orange Roam
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/10">Fly Rod</NavDropdown.Item>
              <NavDropdown.Item href="/products/11">
                Fishing Pole
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reels">
              <NavDropdown.Item href="/products/12">
                Ocean Caster
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/13">
                Bait Caster
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/14">
                Goldy Locks
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/15">Blue Moon</NavDropdown.Item>
              <NavDropdown.Item href="/products/16">Abyss</NavDropdown.Item>
              <NavDropdown.Item href="/products/17">
                Silver Bullet
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tackle">
              <NavDropdown.Item href="/products/18">Back Pack</NavDropdown.Item>
              <NavDropdown.Item href="/products/19">
                Plastic Box
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/20">
                Chest Pack
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/21">
                Large Tackle Box
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/22">
                Water Proof Box
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/23">Fly Box</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Boots">
              <NavDropdown.Item href="/products/24">
                Jungle Boots
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/25">The Boot</NavDropdown.Item>
              <NavDropdown.Item href="/products/26">Sims Foot</NavDropdown.Item>
              <NavDropdown.Item href="/products/27">
                Reddington Grey
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/28">Booties</NavDropdown.Item>
              <NavDropdown.Item href="/products/29">
                Wrapth Tech
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Clothing">
              <NavDropdown.Item href="/products/30">
                Bass Hoodie
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/31">
                Half Gloves
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/32">
                Long Sleeve Shirt
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/33">
                America Fish Hat
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/34">Goture</NavDropdown.Item>
              <NavDropdown.Item href="/products/35">
                Shark Shirt
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link href="/cart">
              <HiOutlineShoppingCart style={{ fontSize: "25px" }} />
            </Nav.Link>
            <NavDropdown title={<BiUserCircle style={{ fontSize: "25px" }} />}>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
