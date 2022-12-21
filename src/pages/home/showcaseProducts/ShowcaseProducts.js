import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ShowcaseProducts = () => {

    const { data: products, isLoading, refetch, error } = useQuery("products", () => fetch("https://kino-9rm3.onrender.com/api/v1/products?page=1&limit=8").then(res => res.json())
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
            <span className="font-bold flex align-center"><span className="material-symbols-outlined">
                shopping_bag
            </span>Our Products</span>
            <div className="text-xl md:text-3xl font-bold text-warning mt-3">Find What you Looking For</div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

                {
                    products?.data?.map((product) => <ProductCard key={product._id} product={product} />)
                }

            </div>
            <div className="mt-10 md:sticky md:bottom-10">
                <Link to="/shop" className="btn btn-outline btn-warning rounded-xl  bg-white">
                    More Products <span className="material-symbols-outlined ml-2">
                        arrow_forward
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default ShowcaseProducts;