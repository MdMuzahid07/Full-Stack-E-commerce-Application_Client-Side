import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import SocialLogin from './SocialLogin';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();

    const handleEmailSingUp = (e) => {
        e.preventDefault();

        console.log()
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate("/");
                    toast.success("Welcome to Kino");
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>SignUp</HelmetTitle>
            <div className="flex justify-center items-center my-20">
                <div className="bg-white border rounded-xl p-10">
                    <p className="text-2xl font-bold">SignUp</p>
                    <div className="mt-10">
                        <form onSubmit={handleEmailSingUp} style={{ maxWidth: "400px" }}>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full mb-5 rounded-full" />
                            <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered w-full mb-5 rounded-full" />
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered w-full mb-5 rounded-full" />
                            <input type="submit" value="SignUp" className="btn rounded-full mb-5" />
                        </form>
                        <div className="mb-7">
                            <p><small>Forget Password? <Link to="/login" className="font-bold ml-2">Reset</Link></small></p>
                            <p><small>Already have a account? <Link to="/login" className="font-bold ml-2">Please Login</Link></small></p>
                        </div>
                        <div className="divider"><span className="bg-slate-100 border rounded-xl p-2 font-bold">OR</span></div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;