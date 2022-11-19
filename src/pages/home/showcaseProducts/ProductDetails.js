import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';

const ProductDetails = () => {
    const { Id } = useParams();

    const url = `https://kino-9rm3.onrender.com/api/v1/products/${Id}`
    const { data: product, isLoading, error, refetch } = useQuery("product", () => fetch(url).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!product) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };

    const { productName, brand, description, feature1, feature2, feature3, feature4, feature5, feature6, feature7, minimumOrder, price, productImage, productQuantity } = product?.data;

    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>ProductDetails</HelmetTitle>

            <div className="grid md:grid-cols-2 gap-4 my-10">

                <div className="bg-slate-100 rounded-xl">
                    <img className="rounded-xl w-full" src={productImage} alt="product_image" />
                </div>

                <div className="bg-white p-5">
                    <div>
                        <span className="badge badge-warning font-bold">New</span>
                        <div className="text-2xl md:text-4xl font-bold text-warning mt-3">{productName}</div>
                        <div className=" font-bold mt-3">Brand: {brand}</div>
                        <div className="text-xl font-bold my-2">Product offer price</div>
                    </div>
                    <div className="mt-7">
                        <div>Price: ${price}</div>
                        <div>Minimum Order:{minimumOrder}</div>
                        <div>Available Quantity: {productQuantity}</div>
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
                        <button className="btn btn-wide rounded-full"><span className="material-symbols-outlined">
                            shopping_cart
                        </span>Add Cart</button>
                    </div>
                </div>

            </div>
            <div className="my-10">
                <div className="text-xl font-bold text-warning mb-3">Features & Functionalities</div>
                <hr />
                <p className="my-2"><span className="font-bold">1.</span> {feature1}</p>
                <hr />
                <p className="my-2"><span className="font-bold">2.</span> {feature2} </p>
                <hr />
                <p className="my-2"><span className="font-bold">3.</span> {feature3}</p>
                <hr />
                <p className="my-2"><span className="font-bold">4.</span> {feature4}</p>
                <hr />
                <p className="my-2"><span className="font-bold">5.</span> {feature5}</p>
                <hr />
                <p className="my-2"><span className="font-bold">6.</span> {feature6}</p>
                <hr />
                <p className="my-2"><span className="font-bold">7.</span> {feature7}</p>
            </div>
            <div>
                <div>
                    <div className="text-xl font-bold text-warning mb-3">Description </div>
                    {description}
                </div>
            </div>

        </section>
    );
};

export default ProductDetails;