import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  // active style
  const activeStyle = {
    color: "#CFC09A"
  };
  return (
    <Navbar bg="light" expand="lg" className="nav-menu py-4">
      <Container>
        <Navbar.Brand href="#home" className="header-logo">FakeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/home">Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/products">Products</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/about">About</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/contact">Contact</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/blogs">Blogs</NavLink>
            {/* <Nav.Link className="menu-items mx-2" to="/products" as={Link}>Products</Nav.Link>
            <Nav.Link className="menu-items mx-2" to="/about" as={Link}>About</Nav.Link>
            <Nav.Link className="menu-items mx-2" to="/contact" as={Link}>Contact</Nav.Link>
            <Nav.Link className="menu-items mx-2" to="/blogs" as={Link}>Blogs</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;