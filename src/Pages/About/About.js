import React from 'react';
import './About.css';
import image from '../../Assets/My image/Photo Of Mehedi Hasan.jpg';

const About = () => {
    return (
        <section>
            <div className='about-section d-flex justify-around align-items-center border my-4 p-3 w-50 mx-auto'>
                <img src={image} alt="img" />
                <div className='p-3'>
                    <h4>Md Mehedi Hasan</h4>
                    <ul className="card-text">
                        <li>I want to learn web development and get a job as a web developer in a reputed company in the world.</li>
                        <li>I want to reach my dream goal by working hard in the coming days to fulfill this dream of mine.</li>
                        <li>Pray to Allah for me.</li>
                    </ul>
                </div>
            </div>
        </section >
    );
};

export default About;