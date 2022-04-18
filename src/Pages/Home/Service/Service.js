import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ pack }) => {
    const { name, picture, price, description } = pack || {};
    return (
        <div className="card mx-auto" style={{ width: "20rem" }}>
            <img style={{ height: "280px" }} src={picture} className="card-img-top p-2" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h5 className="card-title">Price: ${price}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/checkout/${name}`} className="btn btn-primary">Book Now</Link>
            </div>
        </div>
    );
};

export default Service;