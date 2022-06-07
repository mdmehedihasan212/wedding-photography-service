import { signOut } from 'firebase/auth';
import React from 'react';
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
                            <CustomLink className="text-decoration-none ms-4" as={Link} to="/">Home</CustomLink>
                            <CustomLink className="text-decoration-none ms-4" as={Link} to="/services">Services</CustomLink>
                        </Nav>
                        <Nav className="header">
                            <CustomLink className="text-decoration-none ms-4" as={Link} to="/blogs">Blogs</CustomLink>
                            <CustomLink className="text-decoration-none ms-4" as={Link} to="/about">About</CustomLink>
                        </Nav>
                        <Nav className="header">
                            {
                                user ?
                                    <CustomLink className="text-decoration-none ms-4" onClick={() => signOut(auth)} as={Link} to="/registration">Sign out</CustomLink>
                                    :
                                    <CustomLink className="text-decoration-none ms-4" as={Link} to="/registration">Sign up</CustomLink>
                            }

                        </Nav>
                        <Nav className="header">
                            <button className="btn btn-link text-decoration-none ms-4">{user?.displayName}</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;