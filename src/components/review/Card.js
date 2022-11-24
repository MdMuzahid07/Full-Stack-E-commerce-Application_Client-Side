import React from 'react';

const Card = ({ review }) => {
    const { userName, userAvatar, userReview, userTitle } = review;
    return (
        <div className="p-2">
            <div className="bg-white border-2 hover:border-warning rounded-xl p-4">
                <div style={{ minHeight: "110px" }}>
                    <small>{userReview}</small>
                </div>
            </div>
            <div className="mt-3 flex items-center">
                <div className="avatar">
                    <div className="avatar">
                        <div className="w-11 rounded-full">
                            <img src={userAvatar} alt="profile_image" />
                        </div>
                    </div>
                </div>
                <div className="ml-3">
                    <p><small>{userTitle}</small></p>
                    <p className="text-lg">{userName}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;