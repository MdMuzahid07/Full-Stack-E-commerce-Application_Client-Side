import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CART_CONTEXT } from '../../App';

const CartCalculation = () => {
    const navigate = useNavigate();

    const handleMakePayment = () => {
        toast.error("Please fill the address form");
        navigate("/address");
    };

    const { state } = useContext(CART_CONTEXT);

    let totalPrice = 0;

    const cart = state?.cart;

    for (const product of cart) {
        totalPrice = Number(totalPrice) + Number(product.price);
    };

    const Discount = 20;
    const shippingFee = 50;
    const grandTotal = Number(totalPrice) + shippingFee + Discount;

    return (
        <div>
            <p className=" mb-2"><span className="text-lg font-bold">Total Price:</span> ${totalPrice} USD</p>
            <p className=" mb-2"><span className="text-lg font-bold">Discount:</span> ${Discount} USD</p>
            <p className=" mb-3"><span className="text-lg font-bold">Shipping Cost:</span> ${shippingFee} USD</p>
            <hr />
            <p className="font-bold text-xl py-2"><span className="text-lg font-bold">Grand Total:</span> ${grandTotal} USD</p>

            <div>
                <button onClick={handleMakePayment} className="btn btn-dark md:btn-wide rounded-xl mt-10">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default CartCalculation;