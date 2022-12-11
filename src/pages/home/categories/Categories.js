import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/shop")
    };

    return (
        <section className="my-20">
            <span className="font-bold flex align-center"><span className="material-symbols-outlined">
                sell
            </span>Categories</span>
            <div className="text-xl md:text-3xl font-bold text-warning mt-3">All Categories</div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/nmGnJ6x/IPhone-logo.png" alt="Iphone_logo" />
                        <div className="text-center mt-2">IPhone</div>
                    </button>
                </div>
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/Smy2MPh/Mac-Book-logo.png" alt="MacBook_logo" />
                        <div className="text-center mt-2">MacBook</div>
                    </button>
                </div>
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/nzgyQjT/Apple-Watch-Logo.png" alt="Apple_Watch_logo" />
                        <div className="text-center mt-2">Watch</div>
                    </button>
                </div>
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/rKhbL2G/IPad-Logo.png" alt="IPad_logo" />
                        <div className="text-center mt-2">IPad</div>
                    </button>
                </div>
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/GCGnR34/Apple-TV-Logo.png" alt="Apple_TV_&_Home_Appliances_logo" />
                        <div className="text-center mt-2">TV & Home</div>
                    </button>
                </div>
                <div onClick={() => handleOnClick()} className="border rounded-xl px-3 py-7 flex justify-center align-center hover:border-warning">
                    <button>
                        <img src="https://i.ibb.co/DRkCRDV/Apple-Accessories.png" alt="Apple_Accessories_logo" />
                        <div className="text-center mt-2">Accessories</div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;