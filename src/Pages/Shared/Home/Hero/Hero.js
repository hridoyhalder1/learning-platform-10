import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../../asstes/banner/banner1.jpg';
import banner2 from '../../../../asstes/banner/banner2.jpg';
import banner3 from '../../../../asstes/banner/banner3.jpg';
const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='caption'>
                        <h1>Learn HTML!</h1>
                        <p>This HTML course for web developers provides a solid overview for developers, from novice to expert level HTML.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='caption'>
                        <h1>Learn CSS!</h1>
                        <p>An evergreen CSS course and reference to level up your web styling expertise.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className='caption'>
                        <h1>Learn React!</h1>
                        <p>
                            Build performant and progressive React applications.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Hero;