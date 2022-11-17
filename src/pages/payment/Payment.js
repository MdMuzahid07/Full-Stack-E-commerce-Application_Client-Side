import { Elements, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import HelmetTitle from '../../components/helmetTitle/HelmetTitle';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51L0o8fEyiRobmIfUp7b7wXoZxyHDSl8m2BGzmMqnEtpwFOWNRNK6c2t4Z2CyJbKaf8P3Qj9D2aYfmA7Repd8HUdY00pgoVL8DW');

const Payment = () => {
    return (
        <section className="px-3 lg:px-0 my-10">
            <HelmetTitle>Make Payment</HelmetTitle>
            <div>
                <span className="text-2xl font-bold">Make Payment</span>

                <div>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;