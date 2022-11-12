import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import NewsLetterSubscribe from '../../components/newsletter/NewsLetterSubscribe';
import AboutBrand from './AboutBrand';
import Banner from './Banner';
import FunFact from './FunFact';

const About = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>About</HelmetTitle>
            <Banner />
            <AboutBrand />
            <FunFact />
            <NewsLetterSubscribe />
        </section>
    );
};

export default About;