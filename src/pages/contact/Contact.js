import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import Banner from './Banner';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';

const Contact = () => {
    return (
        <section className="px-3 lg:px-0">
            <HelmetTitle>Contact</HelmetTitle>
            <Banner />
            <ContactForm />
            <GoogleMap />
        </section>
    );
};

export default Contact;