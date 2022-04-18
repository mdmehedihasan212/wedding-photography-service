import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/Banner/banner-1.jpg';
import banner2 from '../../../Assets/Banner/banner-2.jpg';
import banner3 from '../../../Assets/Banner/banner-3.jpg';

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
                    <Carousel.Caption>
                        <h3>Love and Tenderness</h3>
                        <p>brides wedding party in the elegant restaurant with a wonderful light and atmosphere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Love and Tenderness</h3>
                        <p>brides wedding party in the elegant restaurant with a wonderful light and atmosphere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Love and Tenderness</h3>
                        <p>brides wedding party in the elegant restaurant with a wonderful light and atmosphere</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;