import React from 'react';

const User = (props) => {

    const {
        handleUserDelete,
        handleMakeAdmin,
        handleMakeSuperAdmin,
        user
    } = props;

    const { _id, userName, userRole } = user;

    console.log(user);
    return (
        <>
            <tr>
                <th>
                    <h2>{_id}</h2>
                </th>
                <td>
                    <span>{userName}</span>
                </td>
                <td className="f-bold">{userRole}</td>
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