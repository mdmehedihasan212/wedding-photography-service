import React from 'react';
import './About.css';
import image from '../../Assets/My image/Photo Of Mehedi Hasan.jpg';

const About = () => {
    return (
        <section className='container'>
            <div class="card w-25 mx-auto my-5">
                <img src={image} class="card-img-top mt-3 w-50 mx-auto" alt="..." />
                <div className='p-3'>
                    <h4 className='text-center'>Md Mehedi Hasan</h4>
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