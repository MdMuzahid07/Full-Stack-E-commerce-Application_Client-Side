import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="border rounded-xl bg-white p-10 md:px-20 my-10">
            <div className="md:flex justify-between items-center gap-4">
                <div>
                    <div class="flex items-center">
                        <div>
                            <Link to="/">
                                <span className="text-xl mr-2">Home <span className="font-bold">{`<`}</span></span>
                            </Link>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-warning">Shop</p>
                        </div>
                    </div>
                    <div className="text-3xl mt-3">Explore Our Products</div>
                </div>
                <div className="mt-10 md:mt-0">
                    <img className="w-44" src="https://i.ibb.co/B6G75SH/apple-siri-home.png" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;