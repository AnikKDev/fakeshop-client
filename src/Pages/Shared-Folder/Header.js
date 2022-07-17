import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';
const Header = ({ onChangeHandler, texts }) => {
  // active style
  const activeStyle = {
    color: "#CFC09A"
  };

  /* // declaring auto suggestions with search
  const [products, setProducts] = useState([]);
  const [texts, setTexts] = useState('');
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = products.filter(product => {
        const regEx = new RegExp(`${text}`, "gi");
        return product.title.match(regEx);
      })
    }
    console.log(matches)
    setSuggestions(matches)
    setTexts(text);
  } */
  return (
    <Navbar bg="light" expand="lg" className="nav-menu py-4">
      <Container>
        <Navbar.Brand to="/" as={Link} className="header-logo">Fake<span style={{ color: "#CFC09A" }}>Shop</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/home"><i class="fa-solid fa-house"></i> Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/products"><i class="fa-solid fa-shop"></i> Products</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/about"><i class="fa-solid fa-shop"></i> About</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/contact"><i class="fa-solid fa-shop"></i> Contact</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-2 menu-items" to="/blogs"><i class="fa-solid fa-blog"></i> Blogs</NavLink>
            <div class="form-inline my-2 my-lg-0">
              <input onChange={e => onChangeHandler(e.target.value)} value={texts} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Header;