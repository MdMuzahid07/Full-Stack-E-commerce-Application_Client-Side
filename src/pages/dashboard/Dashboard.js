import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    const url = "https://kino-9rm3.onrender.com/api/v1/users";

    const { data: allUsers, isLoading, refetch, error } = useQuery("loggedUser", () => fetch(url).then(res => res.json())
    );

    if (isLoading) {
        return <LoadingSpinner />
    } else if (!allUsers) {
        return refetch();
    } else if (error) {
        toast.error(error.message)
    };

    const isValid = allUsers?.data.find((users) => users?.userEmail === user?.email);


    const isAdmin = isValid?.userRole === "Admin";


    return (
        <section className="bg-white px-3 lg:px-0">
            <HelmetTitle>Dashboard</HelmetTitle>
            <div className="drawer drawer-mobile border rounded-xl my-10">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-outline rounded-xl bg-white drawer-button lg:hidden m-5 sticky top-5 left-5 z-50"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <div className="bg-white md:my-5 mx-5 rounded-xl p-5">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side rounded-l-lg">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-white border-r text-xs font-bold">
                        {/* <!-- Sidebar content here --> */}
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                !isAdmin && <Link to="myProfile">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>My Profile
                                </Link>
                            }
                        </li>
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                !isAdmin && <Link to="review">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>Give a review
                                </Link>
                            }
                        </li>
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                !isAdmin && <Link to="myOrders">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>My Orders
                                </Link>
                            }
                        </li>
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                isAdmin && <Link to="manageProducts">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    Manage Product
                                </Link>
                            }
                        </li >
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                isAdmin && <Link to="manageOrders">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>Manage Orders
                                </Link>
                            }
                        </li >
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                isAdmin && <Link to="manageUsers">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>Manage users
                                </Link>
                            }
                        </li >
                        <li className="bg-white border rounded-xl mb-2">
                            {
                                isAdmin && <Link to="addProduct"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>Add Product
                                </Link>
                            }
                        </li >
                    </ul >
                </div >
            </div >
        </section>
    );
};

export default Dashboard;



