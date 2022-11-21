import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import ReviewSlider from '../../components/review/ReviewSlider';
import ThumbnailAirPodMax from './airpodMaxThumbnail/ThumbnailAirPodMax';
import Categories from './categories/Categories';
import Footer from './footer/Footer';
import Header from './header/Header';
import ShowcaseProducts from './showcaseProducts/ShowcaseProducts';

const Home = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Home</HelmetTitle>
            <Header />
            <Categories />
            <ThumbnailAirPodMax />
            <ShowcaseProducts />
            <ReviewSlider />
            <Footer />
        </section>
    );
};

export default Home;