import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastContainer = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            transition={Slide}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
};

export default ReactToastContainer;