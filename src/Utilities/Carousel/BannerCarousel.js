import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner3.jpg';
import banner3 from '../../images/banner2.jpg';
import './BannerCarousel.css'
const BannerCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    // style={{ height: "100vh" }}
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="banner-headings">Shopping At Ease</h1>
                    <p className="banner-info">Choose whatever you need from our store</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    // style={{ height: "100vh" }}
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="banner-headings">Quality Matters</h1>
                    <p className="banner-info">Providing The Best You Can Ask For</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    // style={{ height: "100vh" }}
                    className="d-block w-100 img-fluid"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="banner-headings">Affordable Price</h1>
                    <p className="banner-info">
                        Providing Products Within Minimal Price Range With Multiple Payment Services
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BannerCarousel;