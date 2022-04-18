import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/Banner/banner-1.webp';
import banner2 from '../../../Assets/Banner/banner-2.jpg';
import banner3 from '../../../Assets/Banner/banner-3.png';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;