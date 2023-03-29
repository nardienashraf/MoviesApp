import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import './header.css'
import { useSelector } from 'react-redux';



const Header = () => {

  const FavData = useSelector((state) => state.favorite.FavoriteMovie)

  return (

    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand>Movies Website</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link>
              <Link to='/' className={'text-decoration-none text-white'}>Home</Link>
            </Nav.Link>

            <NavDropdown title="Movies">
              <NavDropdown.Item>
                <Link to='/movies' className={'text-decoration-none text-dark'}>Popular</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/favmovies' className={'text-decoration-none text-dark'}>Favourites</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>Upcoming</NavDropdown.Item>
              <NavDropdown.Item>Top Rated</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="TV Shows">
              <NavDropdown.Item>Popular</NavDropdown.Item>
              <NavDropdown.Item>Airing Today</NavDropdown.Item>
              <NavDropdown.Item>On TV</NavDropdown.Item>
              <NavDropdown.Item>Top Rated</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>More</Nav.Link>
          </Nav>


          <Nav>
          <Nav.Link>Add To Favourites <i className="fa-sharp fa-regular fa-heart">{FavData.length}</i></Nav.Link>
            <Nav.Link>Login <i className="fa-solid fa-user"></i></Nav.Link>
            <Nav.Link>Search <i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}





export default Header;