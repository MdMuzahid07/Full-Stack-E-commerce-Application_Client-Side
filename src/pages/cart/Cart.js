import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import CartCard from './CartCard';

const Cart = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Cart</HelmetTitle>
            <div className="grid md:grid-cols-2 gap-4 my-10">
                <div>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div>
                    <div className="border rounded-xl p-4 sticky top-28">
                        <div>
                            <p className="text-2xl font-bold"><span class="material-symbols-outlined mr-3 bg-warning rounded-full p-2">
                                shopping_cart
                            </span>Your Cart</p>
                        </div>
                        <div className="mt-10">
                            <p className=" mb-2"><span className="text-lg font-bold">Total Price:</span> $700 USD</p>
                            <p className=" mb-2"><span className="text-lg font-bold">Discount:</span> $20 USD</p>
                            <p className=" mb-3"><span className="text-lg font-bold">Shipping Cost:</span> $50 USD</p>
                            <hr />
                            <p className="font-bold text-xl py-2"><span className="text-lg font-bold">Grand Total:</span> $730 USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;