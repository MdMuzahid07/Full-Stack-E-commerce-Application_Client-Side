import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Address = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    if (errors) {
        toast.error(errors.message);
    };

    console.log(watch);

    return (
        <section className="px-3 lg:px-0 my-10">
            <div className="card card-compact bg-white w-full border rounded-xl my-7 md:my-0">
                <div className="card-body">

                    <h2 className="text-2xl font-bold mt-7">Your Address</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input {...register("name")} type="text" placeholder="first name" className="input input-bordered w-full rounded-xl my-4" />
                            <input {...register("name")} type="text" placeholder="last name" className="input input-bordered w-full rounded-xl my-4" />
                        </div>

                        <input {...register("email")} type="email" placeholder="email address" className="input input-bordered w-full rounded-xl" />

                        <input {...register("contact")} type="number" placeholder="phone" className="input input-bordered w-full rounded-xl my-4" />

                        <input {...register("address")} type="text" placeholder="address" className="input input-bordered w-full rounded-xl" />

                        <div className="grid md:grid-cols-2 gap-4 my-4">
                            <input {...register("city")} type="text" placeholder="city" className="input input-bordered w-full rounded-xl" />
                            <input {...register("state")} type="text" placeholder="state" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input {...register("country")} type="text" placeholder="country" className="input input-bordered w-full rounded-xl" />
                            <input {...register("zip")} type="number" placeholder="zip code" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <input {...register("password")} type="password" placeholder="password" className="input input-bordered w-full rounded-xl mt-4" />

                        <button className="btn btn-outline rounded-xl my-7">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Address;