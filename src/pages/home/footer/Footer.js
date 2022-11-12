import React from 'react';
import NewsLetterSubscribe from '../../../components/newsletter/NewsLetterSubscribe';

const Footer = () => {
    return (
        <footer className="my-10">
            {/* <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white flex justify-between align-center border rounded-xl p-5">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>

                    </div>
                </div>
                <div className="bg-white border rounded-xl p-5">

                </div>
            </div> */}

            <NewsLetterSubscribe />
        </footer>
    );
};

export default Footer;