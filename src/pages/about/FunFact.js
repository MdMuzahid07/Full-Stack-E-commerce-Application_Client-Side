import React from 'react';

const FunFact = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 my-32">
            <div className="border hover:border-warning rounded-xl p-10">
                <img className="w-24 mx-auto mb-7 rounded-full" src="https://i.ibb.co/YBfLRyd/customers.png" alt="" />
                <div className="text-xl text-center font-bold capitalize">
                    more than 2.2 billion customers
                </div>
            </div>
            <div className="border hover:border-warning rounded-xl p-10">
                <img className="w-24 mx-auto mb-7 rounded-full" src="https://i.ibb.co/HpcwymP/experience.png" alt="" />
                <div className="text-xl text-center font-bold capitalize">
                    47 Years Of Experience
                </div>
            </div>
            <div className="border hover:border-warning rounded-xl p-10">
                <img className="w-24 mx-auto mb-7 rounded-full" src="https://i.ibb.co/VQ13MX0/awars.png" alt="" />
                <div className="text-xl text-center font-bold capitalize">
                    100+ awards won
                </div>
            </div>
        </div>
    );
};

export default FunFact;