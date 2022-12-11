import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
    // const products = "";

    const [query, setQuery] = useState("");
    console.log(query);
    // console.log(products.filter(product => product.productName.toLowerCase().includes(query)))
    // console.log(query);

    return (
        <div className="dropdown dropdown-bottom dropdown-start md:dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu w-52 md:w-72 ms-5">
                <li>
                    <input onChange={e => setQuery(e.target.value)} type="text" placeholder="Search" className="input w-full max-w-xl rounded-lg drop-shadow bg-white" />
                </li>
            </ul>
        </div>
    );
};

export default SearchBar;