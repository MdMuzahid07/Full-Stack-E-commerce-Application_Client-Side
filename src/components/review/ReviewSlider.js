import React from 'react';
import Slider from 'react-slick';
import Card from './Card';



const ReviewSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="my-20">
            <Slider arrows={false} {...settings}>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </Slider>
        </div>
    );
};

export default ReviewSlider;