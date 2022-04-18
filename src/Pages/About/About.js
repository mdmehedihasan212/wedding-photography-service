import React from 'react';
import image from '../../Assets/My image/Photo Of Mehedi Hasan.jpg';

const About = () => {
    return (
        <section>
            <div>
                <div className="card mb-3 mx-auto mt-4 shadow-sm bg-body rounded" style={{ width: "650px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start p-2" alt="img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body  mt-2">
                                <h4 className="card-title">Md Mehedi Hasan</h4>
                                <ul className="card-text">
                                    <li>I want to learn web development and get a job as a web developer in a reputed company in the world.</li>
                                    <li>I want to reach my dream goal by working hard in the coming days to fulfill this dream of mine.</li>
                                    <li>Pray to Allah for me.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;