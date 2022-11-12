import React from "react";
import Slider from "react-slick";


const Header = () => {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    return (
        <section className="bg-white border rounded-xl p-5 md:p-20 my-7">
            <Slider arrows={false} {...settings}>
                <div>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <p className="mb-3 font-bold">Black friday</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-warning">Electronic</h2>
                            <h3 className="text-2xl md:text-7xl font-bold">New Arrivals</h3>
                            <button className="btn btn-dark rounded-full mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/7jYn66f/Untitled-design-1-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <p className="mb-3 font-bold">Best selling</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-warning">Apple</h2>
                            <h3 className="text-2xl md:text-7xl font-bold">AirPod Max</h3>
                            <button className="btn btn-dark rounded-full mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img style={{ width: "400px" }} src="https://i.ibb.co/G0D2zxw/Untitled-design-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <p className="mb-3 font-bold">This week only</p>
                            <h2 className="text-2xl md:text-5xl font-bold text-warning">Up sale to</h2>
                            <h3 className="text-2xl md:text-7xl font-bold">20% off</h3>
                            <button className="btn btn-dark rounded-full mt-4">Shop Now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/QH3Rr7d/Untitled-design-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

            </Slider>
        </section >
    );
};

export default Header;