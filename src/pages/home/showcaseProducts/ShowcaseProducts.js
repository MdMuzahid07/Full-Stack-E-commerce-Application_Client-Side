import React from 'react';

const ShowcaseProducts = () => {
    return (
        <section className="bg-white my-20">
            <span className="font-bold flex align-center"><span className="material-symbols-outlined">
                shopping_bag
            </span>Our Products</span>
            <div className="text-xl md:text-3xl font-bold text-warning mt-3">Find What you Looking For</div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

                <div className="card card-compact">
                    <figure className="bg-white border border-2 hover:border-warning rounded-xl"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="mt-4">
                        <h2 className="card-title text-warning">product name</h2>
                        <p>Apple is a amazing brand</p>
                        <div className="flex align-center mt-3">
                            <button className="btn btn-outline btn-warning btn-circle">
                                <span class="material-symbols-outlined text-black">
                                    shopping_cart
                                </span>
                            </button>
                            <button className="btn btn-outline btn-warning btn-circle mx-5">
                                <span class="material-symbols-outlined text-black">
                                    favorite
                                </span>
                            </button>
                            <button className="btn btn-outline btn-warning btn-circle">
                                <span class="material-symbols-outlined text-black">
                                    visibility
                                </span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ShowcaseProducts;