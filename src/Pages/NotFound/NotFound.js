import React from 'react';
import errorImg from '../../Assets/404 image/404 error image.webp';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="d-flex align-items-center justify-content-center m-4">
            <div>
                <img className="w-50" src={errorImg} alt="404 Img" />
            </div>
            <div>
                <h3>Oops!</h3>
                <p>404 Page Not Found</p>
                <Link to='/' className="btn btn-primary">Go Homepage</Link>
            </div>
        </section>
    );
};

export default NotFound;