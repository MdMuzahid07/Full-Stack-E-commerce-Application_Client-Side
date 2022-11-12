import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import NewsLetterSubscribe from '../../components/newsletter/NewsLetterSubscribe';
import Banner from './banner/Banner';
import Products from './products/Products';

const Store = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Shop</HelmetTitle>
            <Banner />
            <Products />
            <NewsLetterSubscribe />
        </section>
    );
};

export default Store;