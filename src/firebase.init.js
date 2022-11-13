// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnVADulMSIiunULk6-EGbYWgwD9CtqDUk",
    authDomain: "mern-ecommerce-application.firebaseapp.com",
    projectId: "mern-ecommerce-application",
    storageBucket: "mern-ecommerce-application.appspot.com",
    messagingSenderId: "210958029147",
    appId: "1:210958029147:web:c286b0b5a668828fc78a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;