import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';
import ProductCard from './ProductCard';

const Products = () => {
    const { data: products, isLoading, refetch, error } = useQuery("products", () => fetch("https://kino-9rm3.onrender.com/api/v1/products").then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!products) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };

    return (
        <section className="bg-white my-20">
            <div className="md:flex justify-between items-center">
                <div className="grid md:grid-cols-3 gap-4">
                    <select className="select select-bordered rounded-xl w-full">
                        <option disabled selected>Categories</option>
                        <option>Mobiles</option>
                        <option>Tabs</option>
                        <option>Computers</option>
                        <option>Home Appliances</option>
                        <option>Accessories</option>
                    </select>

                    <select className="select select-bordered rounded-xl w-full">
                        <option disabled selected>Color</option>
                        <option>Red</option>
                        <option>Black</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Yellow</option>
                    </select>

                    <select className="select select-bordered rounded-xl w-full">
                        <option disabled selected>Price</option>
                        <option>200$</option>
                        <option>500$</option>
                        <option>1000$</option>
                        <option>1500$</option>
                        <option>3000$</option>
                    </select>
                </div>
                <div>
                    <select className="select select-bordered rounded-xl w-full">
                        <option disabled selected>Sort By Latest</option>
                        <option>Sort By Price</option>
                        <option>Sort By Name</option>
                        <option>Sort By Price</option>
                        <option>Sort By Viewed</option>
                        <option>Sort By Sell</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

                {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product} />)
                }

            </div>
            <div className="mt-10 md:sticky md:bottom-10">
                <button className="btn btn-wide btn-outline btn-warning rounded-full  bg-white">
                    Load More <span className="material-symbols-outlined ml-2">
                        arrow_forward
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Products;