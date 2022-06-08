import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ pack }) => {
    const { name, picture, price, description } = pack || {};

    return (
        <div className="card mx-auto shadow-sm bg-body rounded g-4" style={{ width: "20rem" }}>
            <img style={{ height: "280px" }} src={picture} className="card-img-top p-2" alt="package img" />
            <div className="card-body text-center">
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <p>{description}</p>
                <Link to={`/checkout/${name}`} className="btn btn-outline-warning">Book Now</Link>
            </div>
        </div>
    );
};

export default Service;