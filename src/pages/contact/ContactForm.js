import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();

        toast.error("Undergoing Development")
    };

    return (
        <div className="my-20">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <div className="text-2xl font-bold mb-7"><span className="text-warning">We Happy</span> To Help You</div>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full rounded-xl" />
                        <br />
                        <input type="text" placeholder="Phone" className="input input-bordered w-full rounded-xl my-4" />
                        <br />
                        <input type="text" placeholder="Your Email Address" className="input input-bordered w-full rounded-xl mb-4" />
                        <br />
                        <textarea className="textarea textarea-bordered w-full rounded-xl" rows={10} placeholder="Message"></textarea>
                        <input type="submit" value="Submit" className="btn btn-warning rounded-xl" />
                    </form>
                </div>
                <div>
                    <div className="text-2xl font-bold mb-7">Our Store</div>
                    <div>
                        <p className="text-lg mb-2">
                            1000 New Earth Street, Earth Vegas, EV 000000, Mars
                        </p>
                        <p className="text-lg">Call: 070000000</p>
                        <p className="text-lg">Email: Kino@gmail.com</p>
                    </div>
                    <div className="mt-10">
                        <div className="text-2xl font-bold mb-7">Opening Hours</div>
                        <div>
                            <p className="text-lg">Friday to Sunday: 7AM to 10PM </p>
                            <p className="text-lg">Monday to Thursday: 10AM to 7PM </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;