import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { homeSliderdata } from "../data/homeSliderData.js";
function HomeSlider() {

    const settings = {
        dots: true,
        className: "imageSlider",
        arrows: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: "100px",
        infinite: true,
        pauseOnHover: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,

        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (

        <div className='imageSlider'>
            <Slider {...settings}>
                {homeSliderdata.map((slide, index) => {
                    return (
                        <div className="imgslider" key={index}>
                            <img src={slide.path} alt="carousel" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default HomeSlider