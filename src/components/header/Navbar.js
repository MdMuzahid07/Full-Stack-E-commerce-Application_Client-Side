import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="px-3 md:px-0 sticky top-0">
            <div className="navbar bg-white  border drop-shadow rounded-b-xl">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">Kino</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
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
                    {/* <button className="btn btn-ghost btn-circle">
                        
                    </button> */}
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
                        <label className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 11.9q-1.75 0-2.975-1.238Q7.8 9.425 7.8 7.7q0-1.75 1.225-2.975T12 3.5q1.75 0 2.975 1.225T16.2 7.7q0 1.725-1.225 2.962Q13.75 11.9 12 11.9Zm-8.2 8.4v-3q0-.925.463-1.675.462-.75 1.237-1.15 1.575-.8 3.2-1.188 1.625-.387 3.3-.387 1.675 0 3.3.387 1.625.388 3.2 1.163.775.4 1.238 1.163.462.762.462 1.687v3Zm2.275-2.275h11.85v-.7q0-.275-.137-.5-.138-.225-.363-.325-1.3-.675-2.663-1-1.362-.325-2.762-.325t-2.762.325q-1.363.325-2.663 1-.225.1-.362.325-.138.225-.138.5ZM12 9.625q.8 0 1.363-.563.562-.562.562-1.362t-.562-1.363Q12.8 5.775 12 5.775t-1.362.562q-.563.563-.563 1.363t.563 1.362q.562.563 1.362.563ZM12 7.7Zm0 10.325Z" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 drop-shadow rounded-lg w-52 mt-5">
                            <li><h2>Item 1</h2></li>
                            <li><h2>Item 2</h2></li>
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