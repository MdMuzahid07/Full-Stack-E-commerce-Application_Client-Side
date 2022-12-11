import React from 'react';
import { useContext } from 'react';
import { CART_CONTEXT } from '../../App';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import CartCalculation from './CartCalculation';
import CartCard from './CartCard';

const Cart = () => {

    const { state } = useContext(CART_CONTEXT);


    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Cart</HelmetTitle>
            <div className="grid md:grid-cols-2 gap-4 my-10">
                <div>
                    {
                        state?.cart.map((product) => <CartCard key={product?._id} product={product} />)
                    }
                </div>
                <div>
                    <div className="border rounded-xl p-5 md:p-10 sticky top-28">
                        <div>
                            <p className="text-2xl font-bold"><span className="material-symbols-outlined mr-3 bg-warning rounded-full p-2">
                                shopping_cart
                            </span>Your Cart</p>
                        </div>
                        <div className="mt-10">
                            <CartCalculation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;