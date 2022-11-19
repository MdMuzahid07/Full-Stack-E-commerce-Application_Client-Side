import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import HelmetTitle from '../../../../components/helmetTitle/HelmetTitle';
import LoadingSpinner from '../../../../components/loadingSpinner/LoadingSpinner';
import ManageProductQuantity from './ManageProductQuantity';

const ManageProducts = () => {
    const url = "https://kino-9rm3.onrender.com/api/v1/products";

    const { data: products, isLoading, refetch, error } = useQuery("manageProducts", () => fetch(url).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!products) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };


    const handleDeleteProduct = (id, productName) => {
        console.log(id)
        const sure = window.confirm("Are you sure?");

        const url = `https://kino-9rm3.onrender.com/api/v1/products/${id}`;

        if (sure) {
            fetch(url, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data?.success) {
                        toast.success(`${productName} delete successfully`);
                    }
                })
        };

    };


    return (
        <section className="my-10">
            <HelmetTitle>Mange Products</HelmetTitle>
            <h2 className="text-3xl font-bold">Manage Products</h2>
            <hr className="mt-5 mb-10" />

            <div className="overflow-x-auto w-full border rounded-xl">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className="font-bold">quantity</th>
                            <th className="font-bold">Image</th>
                            <th className="font-bold">Product name</th>
                            <th className="font-bold">Price</th>
                            <th className="font-bold">Mange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.data?.map(({ productImage, productName, productQuantity, price, _id }) => {
                                return (
                                    <tr>
                                        <th>
                                            <h2>{productQuantity}</h2>
                                        </th>
                                        <td>
                                            <div>
                                                <img className="w-10" src={productImage} alt=" product_image" />
                                            </div>
                                        </td>
                                        <td>
                                            <p>{productName}</p>
                                        </td>
                                        <td>{price}</td>
                                        <th>
                                            <button onClick={() => handleDeleteProduct(_id, productName)} className="btn rounded-full btn-xs block">Delete</button>
                                            <ManageProductQuantity _id={_id} />
                                        </th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><button className="btn rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg><span className="ml-2">Update All Quantities</span></button></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section >
    );
};

export default ManageProducts;

