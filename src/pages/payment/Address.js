import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';

const Address = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    if (errors) {
        toast.error(errors.message);
    };


    const handleAddressForm = () => {
        navigate("/payment")
    };

    return (
        <section className="px-3 lg:px-0 my-10">
            <HelmetTitle>Address</HelmetTitle>
            <div className="card card-compact bg-white w-full border rounded-xl my-7 md:my-0">
                <div className="card-body">

                    <h2 className="text-2xl font-bold mt-7">Your Address</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input {...register("fName")} type="text" placeholder="first name" className="input input-bordered w-full rounded-xl my-4" />
                            <input {...register("lName")} type="text" placeholder="last name" className="input input-bordered w-full rounded-xl my-4" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input {...register("email")} type="email" placeholder="email address" className="input input-bordered w-full rounded-xl" />
                            <input {...register("contact")} type="number" placeholder="phone" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <textarea {...register("address")} type="text" placeholder="home address" className="textarea textarea-bordered w-full rounded-xl mt-4" />

                        <div className="grid md:grid-cols-2 gap-4 my-4">
                            <input {...register("city")} type="text" placeholder="city" className="input input-bordered w-full rounded-xl" />
                            <input {...register("state")} type="text" placeholder="state" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input {...register("country")} type="text" placeholder="country" className="input input-bordered w-full rounded-xl" />
                            <input {...register("zip")} type="number" placeholder="zip code" className="input input-bordered w-full rounded-xl" />
                        </div>

                        {/* <input {...register("password")} type="password" placeholder="password" className="input input-bordered w-full rounded-xl mt-4" /> */}
                        <button type="submit" onClick={handleAddressForm} className="btn btn-outline rounded-xl my-7">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Address;