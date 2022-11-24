import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CartCard = () => {
    const [quantity, seQuantity] = useState(1)


    const addOne = () => {
        seQuantity(quantity + 1);
    };

    const removeOne = () => {
        if (quantity < 2) {
            toast.error("Your product quantity can't be negative")
        } else {
            seQuantity(quantity - 1);
        }
    };

    const handleDeleteProduct = () => {
        toast.error("its undergoing development");
    };

    return (
        <div>
            <div className="flex  items-center justify-between rounded-xl mb-4">
                <div className="flex">
                    <div className="avatar">
                        <div className="w-24 h-24 border rounded-xl">
                            <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="font-bold text-warning">Product Name</p>
                        <div className="btn-group mt-2">
                            <button onClick={removeOne} className="btn btn-xs"><span className="material-symbols-outlined">
                                remove
                            </span></button>
                            <div className="font-bold px-2">{quantity}</div>
                            <button onClick={addOne} className="btn btn-xs"><span className="material-symbols-outlined">
                                add
                            </span></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="p-2">
                        $100 USD
                    </div>
                    <button onClick={handleDeleteProduct} className="btn btn-outline btn-circle">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
            <hr className="mb-4" />
        </div>
    );
};

export default CartCard;