import React from 'react';

const AboutBrand = () => {
    return (
        <section className="bg-white border rounded-xl my-32">
            <div className="md:flex">
                <div className="flex md:flex-none justify-center pt-10 md:p-0">
                    <img src="https://placeimg.com/260/400/arch" className="rounded-xl md:rounded-none md:rounded-l-xl shadow-2xl" alt="" />
                </div>
                <div className="p-10">
                    <div>
                        <p className="text-2xl font-bold"><span class="material-symbols-outlined mr-3 bg-warning rounded-full p-2">
                            add_business
                        </span>About Our Brand</p>
                    </div>
                    <p className="pt-6 text-lg font-bold">
                        Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States.
                    </p>

                    <p className="mt-3">
                        Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States. Apple is the largest technology company by revenue (totaling US$365.8 billion in 2021) and, as of June 2022, is the world's biggest company by market capitalization, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.

                        Apple was founded as Apple Computer Company on April 1, 1976, by Steve Jobs, Steve Wozniak and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977 and the company's next computer, the Apple II, became a best seller and one of the first mass-produced microcomputers. Apple went public in 1980 to instant financial success. The company developed computers featuring innovative graphical user interfaces, including the 1984 original Macintosh, announced that year in a critically acclaimed advertisement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutBrand;