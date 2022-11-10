import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div>
                    <div className="flex align-end">
                        <img className="w-14" src="https://i.ibb.co/9pZSYw3/delivery.jpg" alt="handover_delivery" />
                        <div className="ml-2">
                            <span className="font-bold ">Fast & Secure Delivery</span>
                            <br />
                            <small>Order Now</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex align-end">
                        <img className="w-14" src="https://i.ibb.co/6v93HSg/batch.jpg" alt="grantee_batch" />
                        <div className="ml-2">
                            <span className="font-bold">Money Back Guarantee</span>
                            <br />
                            <small>Relax</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex align-end">
                        <img className="w-14" src="https://i.ibb.co/sVXNHCm/return.jpg" alt="24_hours_return" />
                        <div className="ml-2">
                            <span className="font-bold">24 Hours Return</span>
                            <br />
                            <small>Be Cool</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex align-end">
                        <img className="w-14" src="https://i.ibb.co/XYJv3FN/professional-support.jpg" alt="professional_support" />
                        <div className="ml-2">
                            <span className="font-bold">24/7 At Your Support</span>
                            <br />
                            <small>We Care Our Clients</small>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <div>
                <footer className="grid md:grid-cols-4 my-10">
                    <div>
                        <div className="text-lg font-bold">Support</div>
                        <div className="my-7">
                            1000 New Earth Street,
                            Earth Vegas, EV 000000, Mars
                        </div>
                        <div className="flex my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.3 19.5q-.75 0-1.275-.525Q2.5 18.45 2.5 17.7V6.3q0-.75.525-1.275Q3.55 4.5 4.3 4.5h15.4q.75 0 1.275.525.525.525.525 1.275v11.4q0 .75-.525 1.275-.525.525-1.275.525Zm7.7-6.95-8-5.1V17.7q0 .125.088.213.087.087.212.087h15.4q.125 0 .213-.087.087-.088.087-.213V7.45ZM12 11l7.85-5H4.15ZM4 7.45V6v11.7q0 .125.088.213.087.087.212.087H4v-.3Z" /></svg> <span className="ml-2">Kino@earth.com</span>
                        </div>
                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.425 20.45q-2.9 0-5.762-1.388-2.863-1.387-5.113-3.637-2.25-2.25-3.637-5.1-1.388-2.85-1.388-5.775 0-.45.3-.75t.75-.3h3.25q.4 0 .687.237.288.238.363.613L9.45 7.3q.05.375-.025.675-.075.3-.325.525l-2.3 2.25q1.2 2 2.837 3.625Q11.275 16 13.35 17.2l2.225-2.25q.25-.25.588-.35.337-.1.687-.05l2.775.575q.375.075.613.35.237.275.237.675v3.25q0 .45-.3.75t-.75.3ZM6.1 9.325l1.775-1.7q.05-.05.063-.113.012-.062-.013-.112L7.5 5.15q-.025-.075-.075-.113Q7.375 5 7.3 5H5.175q-.075 0-.113.037-.037.038-.037.088.075 1.025.338 2.087.262 1.063.737 2.113Zm8.65 8.575q1 .475 2.075.725 1.075.25 2.025.275.05 0 .088-.038.037-.037.037-.087v-2.1q0-.075-.037-.125-.038-.05-.113-.075l-2.1-.425q-.05-.025-.1 0l-.1.05ZM6.1 9.325Zm8.65 8.575Z" /></svg><span className="ml-2">0700000000</span>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-5">Account</div>
                        <div>My Account</div>
                        <div>Login / Register</div>
                        <div>Cart</div>
                        <div>Shop</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-5">Terms And Conditions</div>
                        <div>Privacy Policy</div>
                        <div>Terms Of Use</div>
                        <div>FAQ</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-5"> Download Our Apps</div>
                        <div><small>SignUp using app ang save $7 for first order</small></div>
                        <div className="flex justify-between align-center mt-2">
                            <div>
                                <img className="w-32" src="https://i.ibb.co/sjmfvhr/My-Portfolio-Website-QR-Code.png" alt="" />
                            </div>
                            <div className="px-2">
                                <button className="btn btn-outline w-full btn-dark mb-2">App Store</button>
                                <button className="btn btn-outline w-full btn-dark">Play Store</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
            <hr className="my-5" />
            <div>
                <footer className="grid md:grid-cols-3 pb-10">
                    <div>
                        <div className="flex align-center justify-start">
                            <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a href="/#" className="px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <span>&#169; Copyright 2022, All Right Reserved  By Kino</span>
                    </div>
                    <div className="flex justify-end">
                        <img style={{ marginTop: "-10px", width: "120px" }} className="border border-indigo-300 rounded px-3" src="https://i.ibb.co/kJ23tcV/Stripe-logo.png" alt="" />
                    </div>
                </footer>
            </div>
        </footer >
    );
};

export default Footer;