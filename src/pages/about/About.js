import React from 'react';
import NewsLetterSubscribe from '../../components/newsletter/NewsLetterSubscribe';
import Banner from './Banner';

const About = () => {
    return (
        <section className="px-3 lg:px-0">
            <Banner />
            <NewsLetterSubscribe />
        </section>
    );
};

export default About;