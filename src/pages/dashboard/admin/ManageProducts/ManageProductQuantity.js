import React from 'react';

const ManageProductQuantity = () => {

    const handleQuantityUpdate = ({ _id }) => {
        alert("working?", _id);
    }

    return (
        <div className="dropdown dropdown-end z-50 mt-2">
            <label tabIndex={0} className="btn btn-xs rounded-full">Update Quantity</label>
            <ul tabIndex={0} className="dropdown-content menu bg-white border rounded-xl p-2 w-52">
                <li>
                    <div className="flex justify-center items-center p-0">
                        <input type="number" placeholder="add quantity" className="input w-full" />
                        <button onClick={handleQuantityUpdate} className="btn btn-dark btn-circle">Ok</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ManageProductQuantity;