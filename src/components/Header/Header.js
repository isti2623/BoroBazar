import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark">
            <Container>
                <Link to="/">
                    <img className="w-50" src={logo} alt="" srcset="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                className="text-danger text-decoration-none"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="text-danger text-decoration-none"
                                to="/shop"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                className="text-danger text-decoration-none"
                                to="/feature"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Feature
                            </NavLink>
                            <NavLink
                                className="text-danger text-decoration-none"
                                to="/blog"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                className="text-danger text-decoration-none"
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Login
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;