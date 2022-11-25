import React from 'react';

const User = () => {
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
                    <button className="btn rounded-full btn-xs block">Delete</button>
                    <button className="btn rounded-full btn-xs block  my-2">MakeAdmin</button>
                    <button className="btn rounded-full btn-xs block  my-2">MakeSuperAdmin</button>
                </th>
            </tr>
        </>
    );
};

export default User;