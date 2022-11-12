import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="border rounded-xl bg-white p-10 md:px-20 my-10">
            <div className="md:flex justify-between items-center gap-4">
                <div class="flex items-center">
                    <div>
                        <Link to="/">
                            <span className="text-2xl mr-2">Home <span className="font-bold">{`<`}</span></span>
                        </Link>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-warning">Contact</p>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <img className="w-44" src="https://i.ibb.co/B6G75SH/apple-siri-home.png" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;