import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';

const ShowcaseProducts = () => {
    const { data: products, isLoading, error, refetch } = useQuery("products", () => fetch("http://localhost:5000/api/v1/products").then(res => res.json())
    );

    if (isLoading) {
        return <p>loading</p>
    } else if (!products) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };


    return (
        <section className="bg-white my-20">
            <span className="font-bold flex align-center"><span className="material-symbols-outlined">
                shopping_bag
            </span>Our Products</span>
            <div className="text-xl md:text-3xl font-bold text-warning mt-3">Find What you Looking For</div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">


                {
                    products?.data?.map((product) => <ProductCard key={product?._id} product={product} />)
                }


            </div>
            <div className="mt-10 md:sticky md:bottom-10">
                <button className="btn btn-wide btn-outline btn-warning rounded-full  bg-white">
                    Load More <span class="material-symbols-outlined ml-2">
                        arrow_forward
                    </span>
                </button>
            </div>
        </section>
    );
};

export default ShowcaseProducts;