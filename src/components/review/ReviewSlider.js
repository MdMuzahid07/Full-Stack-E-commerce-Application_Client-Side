import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import Card from './Card';



const ReviewSlider = () => {
    const url = "https://kino-9rm3.onrender.com/api/v1/reviews";

    const { data, isLoading, refetch, error } = useQuery("reviews", () => fetch(url).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!data) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };


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
                {
                    data?.data.map(userReview => <Card key={userReview._id} review={userReview} />)
                }
            </Slider>
        </div>
    );
};

export default ReviewSlider;