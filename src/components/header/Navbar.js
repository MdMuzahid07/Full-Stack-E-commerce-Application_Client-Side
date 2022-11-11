import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="px-3 lg:px-0 sticky top-0 z-50">
            <div className="navbar bg-white  border drop-shadow rounded-b-xl">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">Kino</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 md:py-3">
                        <li>
                            <Link to="/" className="font-bold">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="font-bold">shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className="font-bold">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="font-bold">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-start md:dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu w-52 ms-5">
                            <li>
                                <input type="text" placeholder="Search" className="input w-full max-w-xl rounded-lg drop-shadow bg-white" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/cart" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </Link>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.9q-1.75 0-2.975-1.238Q7.8 9.425 7.8 7.7q0-1.75 1.225-2.975T12 3.5q1.75 0 2.975 1.225T16.2 7.7q0 1.725-1.225 2.962Q13.75 11.9 12 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.2 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm2.275-2.275h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.3-.675-2.663-1-1.362-.325-2.762-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM12 9.625q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363Q12.8 5.775 12 5.775t-1.362.562q-.563.563-.563 1.363t.563 1.362q.562.563 1.362.563ZM12 7.7Zm0 10.325Z" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 drop-shadow rounded-lg w-52 mt-5">
                            <li>
                                <div className="flex align-center">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt="" />
                                        </div>
                                    </div>
                                    <span className="font-bold">Username</span>
                                </div>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.7q-1.45 0-2.475-1.038Q8.5 9.625 8.5 8.2q0-1.45 1.025-2.475Q10.55 4.7 12 4.7q1.45 0 2.475 1.025Q15.5 6.75 15.5 8.2q0 1.425-1.025 2.462Q13.45 11.7 12 11.7Zm-7.5 7.6v-2.225q0-.725.4-1.35.4-.625 1.075-.975 1.475-.725 2.988-1.088Q10.475 13.3 12 13.3t3.038.362q1.512.363 2.987 1.088.675.35 1.075.975.4.625.4 1.35V19.3ZM6 17.8h12v-.725q0-.3-.175-.55-.175-.25-.475-.425-1.3-.625-2.637-.963Q13.375 14.8 12 14.8t-2.713.337q-1.337.338-2.637.963-.3.175-.475.425t-.175.55Zm6-7.6q.825 0 1.413-.588Q14 9.025 14 8.2t-.587-1.413Q12.825 6.2 12 6.2q-.825 0-1.412.587Q10 7.375 10 8.2q0 .825.588 1.412.587.588 1.412.588Zm0-2Zm0 9.6Z" /></svg>My Account
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.875 21v-1.5H18.6q.1 0 .2-.1t.1-.2V5.3q0-.1-.1-.2t-.2-.1h-6.725V3.5H18.6q.75 0 1.275.525.525.525.525 1.275v13.9q0 .75-.525 1.275Q19.35 21 18.6 21Zm-1.25-4.475-1.05-1.1L12 13H3.6v-1.5H12L9.575 9.075l1.05-1.1 4.25 4.275Z" /></svg>
                                    Login
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13.25 9V3.5h7.25V9ZM3.5 12.5v-9h7.25v9Zm9.75 8v-9h7.25v9Zm-9.75 0V15h7.25v5.5ZM5 11h4.25V5H5Zm9.75 8H19v-6h-4.25Zm0-11.5H19V5h-4.25ZM5 19h4.25v-2.5H5Zm4.25-8Zm5.5-3.5Zm0 5.5Zm-5.5 3.5Z" /></svg>
                                    Dashboard
                                </span>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z" /></svg>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-52  drop-shadow">
                            <li>
                                <Link to="/" className="font-bold">Home</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/shop" className="font-bold">shop</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/about" className="font-bold">About</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/contact" className="font-bold">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Navbar;