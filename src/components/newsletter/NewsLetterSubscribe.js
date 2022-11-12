import React from 'react';

const NewsLetterSubscribe = () => {
    return (
        <section className="bg-black rounded-xl mt-4">
            <div className="homePageFooterBgImg flex justify-between align-center gap-4">
                <div className="py-20 px-5 md:px-20 md:py-32">
                    <span className="text-white font-bold flex align-center"><span class="material-symbols-outlined">
                        mark_email_read
                    </span>Newsletter</span>
                    <div className="text-xl md:text-3xl text-warning font-bold mt-3 mb-7">Get weekly update</div>
                    <div className="flex align-center">
                        <input type="email" placeholder="Your email address" className="input input-bordered input-warning w-full max-w-xs rounded-full" />
                        <button className="btn btn-warning rounded-full ml-3">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterSubscribe;