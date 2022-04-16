import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text'>
                <h1>Wedding Planner</h1>
                <p>Wedding Planner is a powerful tool to help your brand grow even more. With amazing features that are simple and easy to use. <br />
                    Build any wedding site style without code knowledge.</p>
                <button className='btn btn-primary'>Contact us</button>
            </div>
        </div>
    );
};

export default Banner;