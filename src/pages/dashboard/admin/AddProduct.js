import React from 'react';
import { useForm } from 'react-hook-form';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    if (errors) {
        console.log(errors)
    }

    console.log(watch);

    return (
        <section className="mx-auto my-10">
            <HelmetTitle>Add Product</HelmetTitle>
            <h2 className="text-3xl font-bold">Add product</h2>
            <hr className="mt-5 mb-10" />

            <div className="md:flex gap-5">
                <div className="card card-compact md:w-72 h-72 bg-white border rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                </div>

                <div className="card card-compact w-full border rounded-xl my-7 md:my-0">
                    <div className="card-body">

                        <h2 className="text-3xl font-bold mt-7">Upload new product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input {...register("productName")} type="text" placeholder="product name" className="input input-bordered w-full rounded-xl my-4" />
                                <input {...register("Brand")} type="text" placeholder="Brand" className="input input-bordered w-full rounded-xl my-4" />
                            </div>

                            <textarea {...register("description")} type="text" placeholder="description" className="textarea textarea-bordered w-full rounded-xl" />

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full rounded-xl" />
                                <input {...register("quantity")} type="number" placeholder="Product quantity" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input {...register("minimumOrder")} type="number" placeholder="Minimum order" className="input input-bordered w-full rounded-xl" />
                                <input {...register("for")} type="text" placeholder="category" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("feature1")} type="text" placeholder="feature1" className="input input-bordered w-full rounded-xl" />
                                <input {...register("feature2")} type="text" placeholder="feature2" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("feature3")} type="text" placeholder="feature3" className="input input-bordered w-full rounded-xl" />
                                <input {...register("feature4")} type="text" placeholder="feature4" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("feature5")} type="text" placeholder="feature5" className="input input-bordered w-full rounded-xl" />
                                <input {...register("feature6")} type="text" placeholder="feature6" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <input {...register("feature67")} type="text" placeholder="feature7" className="input input-bordered w-full rounded-xl" />

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <p>Product image</p>
                                    <input {...register("img")} type="file" className="border p-2 rounded-xl w-full text-xs text-white
                            file:rounded-full file:border-0
                            file:text-xs file:font-xs
                            file:bg-black file:text-white
                            "/>
                                </div>
                                <div>
                                    <p>SnapShot0</p>
                                    <input {...register("snapshot0")} type="file" className="border p-2 rounded-xl w-full text-xs text-white
                            file:rounded-full file:border-0
                            file:text-xs file:font-xs
                            file:bg-black file:text-white
                            "/>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <p>Snapshot1</p>
                                    <input {...register("snapshot1")} type="file" className="border p-2 rounded-xl w-full text-xs text-white
                            file:rounded-full file:border-0
                            file:text-xs file:font-xs
                            file:bg-black file:text-white
                            "/>
                                </div>
                                <div>
                                    <p>SnapShot2</p>
                                    <input {...register("snapshot2")} type="file" className="border p-2 rounded-xl w-full text-xs text-white
                            file:rounded-full file:border-0
                            file:text-xs file:font-xs
                            file:bg-black file:text-white
                            "/>
                                </div>
                            </div>

                            <button className="btn btn-outline rounded-xl my-7"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg></button>
                        </form>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default AddProduct;

