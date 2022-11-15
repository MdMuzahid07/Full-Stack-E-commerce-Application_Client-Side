import React from 'react';

const ProductCard = () => {
    return (
        <section className="card card-compact">
            <figure className="bg-white border border-2 hover:border-warning rounded-xl"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="py-4">
                <h2 className="card-title text-warning">product name</h2>
                <p>Apple is a amazing brand</p>
                <div className="flex align-center mt-3">
                    <button className="btn btn-outline btn-warning btn-circle">
                        <span className="material-symbols-outlined text-black">
                            shopping_cart
                        </span>
                    </button>
                    <button className="btn btn-outline btn-warning btn-circle mx-5">
                        <span className="material-symbols-outlined text-black">
                            favorite
                        </span>
                    </button>
                    <button className="btn btn-outline btn-warning btn-circle">
                        <span className="material-symbols-outlined text-black">
                            visibility
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;