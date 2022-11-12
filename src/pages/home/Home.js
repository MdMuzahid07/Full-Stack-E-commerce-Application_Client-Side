import React from 'react';
import ThumbnailAirPodMax from './airpodMaxThumbnail/ThumbnailAirPodMax';
import Categories from './categories/Categories';
import Footer from './footer/Footer';
import Header from './header/Header';
import ShowcaseProducts from './showcaseProducts/ShowcaseProducts';

const Home = () => {
    return (
        <section className="px-3 lg:px-0">
            <Header />
            <Categories />
            <ThumbnailAirPodMax />
            <ShowcaseProducts />
            <Footer />
        </section>
    );
};

export default Home;