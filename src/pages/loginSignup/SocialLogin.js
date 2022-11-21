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
        <div className="mt-16">
            <button onClick={handleGoogleSignIn} className="btn btn-dark w-full rounded-full">
                <img className="w-9 mr-3" src="https://i.ibb.co/HXDJ62Q/google.png" alt="" /> <span>Sign in using google</span>
            </button>
        </div>
    );
};

export default SocialLogin;