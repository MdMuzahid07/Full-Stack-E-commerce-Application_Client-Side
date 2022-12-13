import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import HelmetTitle from '../../../../components/helmetTitle/HelmetTitle';
import LoadingSpinner from '../../../../components/loadingSpinner/LoadingSpinner';
import User from './User';

const ManageUsers = () => {

    const url = "http://localhost:5000/api/v1/users";

    const { data: users, isLoading, refetch, error } = useQuery("manageUsers", () => fetch(url).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!users) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };

    const handleUserDelete = (id, userName) => {
        const sure = window.confirm("Are you sure?");

        const url = `http://localhost:5000/api/v1/users/${id}`;

        if (sure) {
            fetch(url, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data?.success) {
                        toast.success(`${userName ? userName : "User"} delete successfully`);
                    }
                })
        };
    };

    const handleMakeAdmin = (id) => {
        window.alert("admin", id);
    };

    const handleMakeSuperAdmin = (id) => {
        window.alert("super admin", id);
    };


    return (
        <section className="my-10">
            <HelmetTitle>Mange Users</HelmetTitle>
            <h2 className="text-3xl font-bold">Manage Users</h2>
            <hr className="mt-5 mb-10" />

            <div className="overflow-x-auto w-full border rounded-xl">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="font-bold">UserId</th>
                            <th className="font-bold">UserName</th>
                            <th className="font-bold">Status</th>
                            <th className="font-bold">Mange Users</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.data.map((user) => <User
                                user={user}
                                key={user._id}
                                handleUserDelete={handleUserDelete}
                                handleMakeAdmin={handleMakeAdmin}
                                handleMakeSuperAdmin={handleMakeSuperAdmin}
                            />)
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <button className="btn rounded-xl">
                                    <span class="material-symbols-outlined">delete</span><p className="ml-2">Delete All Users</p>
                                </button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section >
    );
};

export default ManageUsers;

