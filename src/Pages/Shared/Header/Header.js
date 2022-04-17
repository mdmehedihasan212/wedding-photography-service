import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} className="ms-4" to="/">Wedding Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="ms-4" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="ms-4" to="/services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} className="ms-4" to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} className="ms-4" to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link onClick={() => signOut(auth)} as={Link} className="ms-4" to="/registration">Sign out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} className="ms-4" to="/registration">Sign up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;