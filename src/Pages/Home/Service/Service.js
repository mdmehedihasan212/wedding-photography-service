import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ pack }) => {
    const { id, name, picture, price, description } = pack || {};
    console.log(pack);
    return (
        <div className='col-4'>
            <div className="card" style={{ width: "20rem" }}>
                <img style={{ height: "280px" }} src={picture} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5 className="card-title">Price: ${price}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/checkout/${id}`} className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;