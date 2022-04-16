import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ pack }) => {
    const { name, picture, price, description } = pack || {};
    console.log(pack);
    return (
        <div className='col-4'>
            <div className="card">
                <img style={{ height: "280px" }} src={picture} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: ${price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to="#" className="btn btn-primary">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;