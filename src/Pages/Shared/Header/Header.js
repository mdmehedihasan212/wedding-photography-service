import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
            <nav style={{ height: "80px" }} className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">Wedding Photography</Link>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" to="/registration">Registration</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;