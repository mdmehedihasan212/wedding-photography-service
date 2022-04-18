import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ pack }) => {
    const { name, picture, price, description } = pack || {};
    return (
        <div className="card mx-auto shadow-sm bg-body rounded" style={{ width: "20rem" }}>
            <img style={{ height: "280px" }} src={picture} className="card-img-top p-2" alt="package img" />
            <div className="card-body text-center">
                <h3 className="card-title">{name}</h3>
                <h5 className="card-title">Price: ${price}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/checkout/${name}`} className="btn btn-outline-warning">Book Now</Link>
            </div>
        </div>
    );
};

export default Service;