import React from 'react';

const CartCard = () => {
    return (
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
                        <button className="btn btn-xs"><span class="material-symbols-outlined">
                            remove
                        </span></button>
                        <div className="font-bold px-2">1</div>
                        <button className="btn btn-xs"><span class="material-symbols-outlined">
                            add
                        </span></button>
                    </div>
                </div>
            </div>
            <div className="p-2">
                $100 USD
            </div>
        </div>
    );
};

export default CartCard;