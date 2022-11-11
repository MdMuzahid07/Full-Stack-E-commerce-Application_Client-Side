import React from 'react';
import Categories from './categories/Categories';
import Header from './header/Header';

const Home = () => {
    return (
        <section className="px-3 lg:px-0">
            <Header />
            <Categories />
        </section>
    );
};

export default Home;