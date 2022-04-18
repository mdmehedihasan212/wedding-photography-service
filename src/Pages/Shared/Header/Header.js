import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="dark">
                <Container>
                    <h1 className="text-warning">Wedding Photography</h1>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="header ms-auto">
                            <CustomLink as={Link} to="/">Home</CustomLink>
                            <CustomLink as={Link} to="/services">Services</CustomLink>
                        </Nav>
                        <Nav className="header">
                            <CustomLink as={Link} to="/blogs">Blogs</CustomLink>
                            <CustomLink as={Link} to="/about">About</CustomLink>
                            <CustomLink as={Link} to="/contact">Contact</CustomLink>
                        </Nav>
                        <Nav className="header">
                            {
                                user ?
                                    <CustomLink onClick={() => signOut(auth)} as={Link} to="/registration">Sign out</CustomLink>
                                    :
                                    <CustomLink as={Link} to="/registration">Sign up</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;