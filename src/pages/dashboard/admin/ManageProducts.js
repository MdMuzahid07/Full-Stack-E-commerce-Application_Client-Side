import React from 'react';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';

const ManageProducts = () => {
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
                            <th className="font-bold">Total price</th>
                            <th className="font-bold">Mange</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <h2>100</h2>
                            </th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squirrel w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn rounded-full btn-xs block">Delete</button>
                                <button className="btn rounded-full btn-xs block  my-2">Update Quantity</button>
                            </th>
                        </tr>


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

