import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import CartCard from './CartCard';

const Cart = () => {
    const navigate = useNavigate();

    const handleMakePayment = () => {
        toast.error("Please fill the address form")
        navigate("/address");
    };

    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Cart</HelmetTitle>
            <div className="grid md:grid-cols-2 gap-4 my-10">
                <div>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div>
                    <div className="border rounded-xl p-5 md:p-10 sticky top-28">
                        <div>
                            <p className="text-2xl font-bold"><span className="material-symbols-outlined mr-3 bg-warning rounded-full p-2">
                                shopping_cart
                            </span>Your Cart</p>
                        </div>
                        <div className="mt-10">
                            <p className=" mb-2"><span className="text-lg font-bold">Total Price:</span> $700 USD</p>
                            <p className=" mb-2"><span className="text-lg font-bold">Discount:</span> $20 USD</p>
                            <p className=" mb-3"><span className="text-lg font-bold">Shipping Cost:</span> $50 USD</p>
                            <hr />
                            <p className="font-bold text-xl py-2"><span className="text-lg font-bold">Grand Total:</span> $730 USD</p>

                            <div>
                                <button onClick={handleMakePayment} className="btn btn-dark md:btn-wide rounded-xl mt-10">Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;