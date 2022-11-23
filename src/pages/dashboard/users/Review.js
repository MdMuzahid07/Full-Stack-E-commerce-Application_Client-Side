import React from 'react';
import { toast } from 'react-toastify';
import HelmetTitle from '../../../components/helmetTitle/HelmetTitle';
import useCurrentUser from '../../../hooks/useCurrentUser';

const Review = () => {
    const { currentUser } = useCurrentUser();

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        console.log(event);


        const productData = await {};

        const url = "";

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    toast.success(`${currentUser?.disPlayName} Thank You!`);
                }
            })

    };

    return (
        <div className="my-7">
            <HelmetTitle>Give a Review</HelmetTitle>
            <h2 className="text-3xl font-bold">Give a review</h2>
            <hr className="mt-5 mb-7" />
            <div className="bg-white border rounded-xl my-20">
                <div>
                    <div className="p-10">
                        <div className="avatar -mt-16">
                            <div className="w-32 border rounded-full">
                                <img src={currentUser ? currentUser?.photoURL : "https://placeimg.com/192/192/people"} alt="profile_img" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">Review Us</h2>
                        <p className="text-xs font-bold">your a review is valuable for us</p>
                    </div>
                    <div className="p-2 md:p-7">
                        <form onSubmit={handleOnSubmit}>
                            <textarea rows="5" className="textarea textarea-bordered w-full" placeholder="What do you think about our service"></textarea>
                            <div className="rating mt-3 block">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-dark" />
                            </div>
                            <button type="submit" className="btn btn-outline rounded-xl mt-7">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;

