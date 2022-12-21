import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';
import ProductCard from './ProductCard';

const Products = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);


    const { data: products, isLoading, refetch, error } = useQuery("products", () => fetch(`http://localhost:5000/api/v1/products?page=${page}&limit=8`).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!products) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };

    const handleBackPage = () => {
        if (page) {
            setPage(page - 1);
        }
        refetch()
    };

    const handleNextPage = () => {
        if (page) {
            setPage(page + 1);
        }
        refetch()
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
                <div className="flex mt-4 md:mt-0">
                    <div>
                        <div className="dropdown dropdown-bottom dropdown-start md:dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu w-56 md:w-72 ms-5">
                                <li>
                                    <input onChange={e => setQuery(e.target.value)} type="text" placeholder="Search" className="input input-warning w-full max-w-xl rounded-lg drop-shadow bg-white" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <select className="select select-bordered rounded-xl w-full">
                            <option disabled selected>Sort By Latest</option>
                            <option>Sort By Price</option>
                            <option>Sort By Name</option>
                            <option>Sort By Sell</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

                {
                    products?.data?.filter(product => product.productName.toLowerCase().includes(query)).map((product) => <ProductCard key={product._id} product={product} />)
                }

            </div>
            <div className="mt-10 md:sticky md:bottom-10">
                <div className="btn-group">
                    <button onClick={handleBackPage} className="btn  btn-outline btn-warning rounded-full  bg-white">«</button>
                    <button className="btn">{page}</button>
                    <button onClick={handleNextPage} className="btn  btn-outline btn-warning rounded-full  bg-white">»</button>
                </div>
            </div>
        </section>
    );
};

export default Products;