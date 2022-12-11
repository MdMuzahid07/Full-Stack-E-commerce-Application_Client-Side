import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartCalculation = () => {
    const navigate = useNavigate();

    const handleMakePayment = () => {
        toast.error("Please fill the address form");
        navigate("/address");
    };

    return (
        <div>
            <p className=" mb-2"><span className="text-lg font-bold">Total Price:</span> $0 USD</p>
            <p className=" mb-2"><span className="text-lg font-bold">Discount:</span> $20 USD</p>
            <p className=" mb-3"><span className="text-lg font-bold">Shipping Cost:</span> $50 USD</p>
            <hr />
            <p className="font-bold text-xl py-2"><span className="text-lg font-bold">Grand Total:</span> $730 USD</p>

            <div>
                <button onClick={handleMakePayment} className="btn btn-dark md:btn-wide rounded-xl mt-10">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default CartCalculation;