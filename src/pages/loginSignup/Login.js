import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import SocialLogin from './SocialLogin';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();

    const handleEmailLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
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
            <HelmetTitle>Login</HelmetTitle>
            <div className="flex justify-center items-center my-20">
                <div className="bg-white border rounded-xl p-10">
                    <p className="text-2xl font-bold">Login</p>
                    <div className="mt-10">
                        <form onSubmit={handleEmailLogin} style={{ maxWidth: "400px" }}>
                            <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered w-full mb-5 rounded-full" />
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered w-full mb-5 rounded-full" />
                            <input type="submit" value="Login" className="btn rounded-full mb-5" />
                        </form>
                        <div className="mb-7">
                            <p><small>Forget Password? <Link to="/login" className="font-bold ml-2">Reset</Link></small></p>
                            <p><small>New Here? <Link to="/signUp" className="font-bold ml-2">Please SignUp</Link></small></p>
                        </div>
                        <div className="divider"><span className="bg-slate-100 border rounded-xl p-2 font-bold">OR</span></div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;