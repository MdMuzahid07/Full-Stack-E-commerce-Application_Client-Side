import React from 'react';
import Slider from 'react-slick';



const ReviewSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
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

                <div className="p-2">
                    <div className="bg-white border rounded-xl p-3">
                        <h3>1</h3>
                    </div>
                </div>

                <div className="p-2">
                    <div className="bg-white border rounded-xl p-3">
                        <h3>1</h3>
                    </div>
                </div>

                <div className="p-2">
                    <div className="bg-white border rounded-xl p-3">
                        <h3>1</h3>
                    </div>
                </div>

                <div className="p-2">
                    <div className="bg-white border rounded-xl p-3">
                        <h3>1</h3>
                    </div>
                </div>

                <div className="p-2">
                    <div className="bg-white border rounded-xl p-3">
                        <h3>1</h3>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default ReviewSlider;