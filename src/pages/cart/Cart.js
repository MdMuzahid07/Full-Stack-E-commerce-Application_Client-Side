import React from 'react';
import CartCard from './CartCard';

const Cart = () => {
    return (
        <section className="px-3 lg:px-0">
            <div className="grid md:grid-cols-2 gap-4 my-10">
                <div>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div>
                    <div className="border rounded-xl p-4 sticky top-28">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;