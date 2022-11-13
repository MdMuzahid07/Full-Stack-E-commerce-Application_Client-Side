import React from 'react';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';

const ProductDetails = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>ProductDetails</HelmetTitle>

            <div className="grid md:grid-cols-2 gap-4 my-10">

                <div className="bg-slate-100 rounded-xl">
                    <img className="rounded-xl" src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                </div>

                <div className="bg-white p-5">
                    <div>
                        <span className="badge badge-warning font-bold">New</span>
                        <div className="text-2xl md:text-4xl font-bold text-warning mt-3">Product Name</div>
                        <div className="text-xl font-bold my-2">Product offer price</div>
                    </div>
                    <div className="mt-7">
                        <div>Price: 100$</div>
                        <div>Minimum Order: 1</div>
                        <div>Available Quantity: 70</div>
                    </div>

                    <div className="mt-10">
                        <div className="text-xl font-bold mb-3">Choose Color</div>
                        <div className="flex gap-2 md:gap-4 text-white">
                            <div className="bg-red-500 border rounded-full p-5">
                            </div>
                            <div className="bg-black border rounded-full p-5">
                            </div>
                            <div className="bg-pink-500 border rounded-full p-5">
                            </div>
                            <div className="bg-yellow-500 border rounded-full p-5">
                            </div>
                            <div className="bg-blue-500 border rounded-full p-5">
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className="btn btn-wide rounded-full"><span class="material-symbols-outlined">
                            shopping_cart
                        </span>Add Cart</button>
                    </div>
                </div>

            </div>
            <div className="my-10">
                <div className="text-xl font-bold text-warning mb-3">Features & Functionalities</div>
                <hr />
                <p className="my-2"><span className="font-bold">1.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">2.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">3.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">4.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">5.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">6.</span> Ultra performance</p>
                <hr />
                <p className="my-2"><span className="font-bold">7.</span> Ultra performance</p>
            </div>
            <div>
                <div>
                    <div className="text-xl font-bold text-warning mb-3">Description </div>

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit necessitatibus officia beatae eum alias vitae voluptatibus quis, aliquid, id eligendi reprehenderit quas debitis hic iste? Minima a aperiam eius repellat doloremque adipisci iure? Voluptate quibusdam suscipit illum eius distinctio, ducimus quos. Est esse, facere cumque ullam ex sapiente explicabo provident iste non eligendi nisi. Vero magnam maiores corrupti voluptatem quisquam suscipit odit est aperiam at, a saepe, quia mollitia sunt deleniti ex iure amet deserunt placeat quos officia eum. Voluptatem deserunt libero explicabo sint animi corrupti, illo at dolorum voluptates commodi! Officia dicta sint reprehenderit, sit qui doloribus modi nulla? Temporibus esse, tempora earum iure dolorem sit vitae neque voluptate magni ducimus itaque veritatis. At laborum esse quae porro repudiandae dolorum quibusdam error est eos quis, in doloribus culpa numquam ipsum atque ab amet animi perspiciatis autem recusandae et aliquid dicta ducimus beatae? Dignissimos, quas minus eveniet ad fugiat, eligendi dolor et ut similique asperiores optio itaque! Unde facere, magni excepturi corporis ducimus possimus, voluptatem a nemo nam voluptatum soluta dolorem cumque vero quae, explicabo distinctio sit! Obcaecati nulla cumque magni voluptatem delectus adipisci officiis, amet totam repellat pariatur assumenda excepturi distinctio laborum voluptate veritatis, temporibus necessitatibus. Ullam, commodi voluptatum?
                </div>
            </div>

        </section>
    );
};

export default ProductDetails;