import React from 'react';
import HelmetTitle from '../../../../components/helmetTitle/HelmetTitle';
import User from './User';

const ManageUsers = () => {
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

                        <User />
                        <User />
                        <User />

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

