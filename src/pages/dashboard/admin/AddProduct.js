import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';


const AddProduct = () => {
    const [productImage, setProductImage] = useState();
    console.log(productImage)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data.productName);

        const productData = await {
            ...data,
            productImage
        };

        const url = "https://kino-9rm3.onrender.com/api/v1/products";

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    toast.success(`${data.productName} upload successfully`);
                }
            })

    };

    if (errors) {
        console.log(errors)
    }


    // upload image in imgBB
    const storageKey = "f95e3d1149cccc6bb06984f541a59718";
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${storageKey}`;


    const productImageUpload = (event) => {

        const img = event.target.files[0];

        const formData = new FormData();
        formData.append("image", img);

        fetch(uploadUrl, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    setProductImage(img)
                } else {
                    toast.error(result.error)
                }
            })
    };



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
                                <input {...register("brand")} type="text" placeholder="Brand" className="input input-bordered w-full rounded-xl my-4" />
                            </div>

                            <textarea {...register("description")} type="text" placeholder="description" className="textarea textarea-bordered w-full rounded-xl" />

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full rounded-xl" />
                                <input {...register("productQuantity")} type="number" placeholder="Product quantity" className="input input-bordered w-full rounded-xl" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input {...register("minimumOrder")} type="number" placeholder="Minimum order" className="input input-bordered w-full rounded-xl" />
                                <input {...register("category")} type="text" placeholder="category" className="input input-bordered w-full rounded-xl" />
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

                            <input {...register("feature7")} type="text" placeholder="feature7" className="input input-bordered w-full rounded-xl" />

                            <div className="mt-4">
                                <p>Product image</p>
                                <input onChange={productImageUpload} type="file" name="productImage" className="file-input file-input-bordered file-input-xs w-full max-w-xs rounded-xl" />
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

