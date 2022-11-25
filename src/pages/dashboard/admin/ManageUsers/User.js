import React from 'react';

const User = (props) => {

    const {
        handleUserDelete,
        handleMakeAdmin,
        handleMakeSuperAdmin
    } = props;

    return (
        <>
            <tr>
                <th>
                    <h2>userId</h2>
                </th>
                <td>
                    <span>Username</span>
                </td>
                <td className="f-bold">Normal user</td>
                <th>
                    <button onClick={handleUserDelete} className="btn rounded-full btn-xs block">Delete</button>
                    <button onClick={handleMakeAdmin} className="btn rounded-full btn-xs block  my-2">MakeAdmin</button>
                    <button onClick={handleMakeSuperAdmin} className="btn rounded-full btn-xs block  my-2">MakeSuperAdmin</button>
                </th>
            </tr>
        </>
    );
};

export default User;