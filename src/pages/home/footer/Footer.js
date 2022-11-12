import React from 'react';

const Footer = () => {
    return (
        <footer className="my-10">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-xl p-5">

                </div>
                <div className="border rounded-xl p-5">

                </div>
            </div>

            <div className="bg-slate-100 rounded-xl mt-4">
                <div className="homePageFooterBgImg flex justify-between align-center gap-4">
                    <div className="py-20 px-5 md:px-20 md:py-32">
                        <span className="font-bold flex align-center"><span class="material-symbols-outlined">
                            mark_email_read
                        </span>Newsletter</span>
                        <div className="text-xl md:text-3xl text-warning font-bold mt-3 mb-7">Get weekly update</div>
                        <div className="flex align-center">
                            <input type="email" placeholder="Your email address" className="input input-bordered input-warning w-full max-w-xs rounded-full" />
                            <button className="btn btn-outline btn-warning rounded-full ml-3">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;