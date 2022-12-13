import React from 'react';
import { toast } from 'react-toastify';

const ManageProductQuantity = ({ product }) => {
    const { _id, productQuantity, productName } = product;

    const handleQuantityUpdate = (event) => {
        event.preventDefault();
        console.log(_id);

        const inputValue = event.target.quantity.value;
        const newQuantity = +inputValue + +productQuantity;

        const data = {
            ...product,
            productQuantity: newQuantity
        }

        const url = `http://localhost:5000/api/v1/products/${_id}`;

        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    toast.success(`${productName} quantity updated`);
                }
            })

    };

    return (
        <div className="dropdown dropdown-end z-50 mt-2">
            <label tabIndex={0} className="btn btn-xs rounded-full">Update Quantity</label>
            <ul tabIndex={0} className="dropdown-content menu bg-white border rounded-xl p-2 w-52">
                <li>
                    <form onSubmit={handleQuantityUpdate} className="flex justify-center items-center p-0">
                        <input type="number" name="quantity" placeholder="add quantity" className="input w-full" />
                        <button type="submit" className="btn btn-dark btn-circle">Ok</button>
                    </form>
                </li>
            </ul>
        </div>
    );
};

export default ManageProductQuantity;