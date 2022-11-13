import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                if (user) {
                    toast.success(`${user.displayName} Welcome to Kino`);
                    navigate("/");
                }
            }).catch((error) => {
                if (error) {
                    toast.error(error.message);
                }
            });
    };

    return (
        <div className="mt-10 flex items-center">
            <button onClick={handleGoogleSignIn} className="btn btn-ghost btn-circle">
                <img className="w-9" src="https://i.ibb.co/d4DQ4Xt/google-logo.png" alt="" />
            </button>
            <button className="btn btn-ghost btn-circle">
                <img className="w-9" src="https://i.ibb.co/xC3GCnp/github-logo.png" alt="" />
            </button>
        </div>
    );
};

export default SocialLogin;