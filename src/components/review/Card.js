import React from 'react';

const Card = () => {
    return (
        <div className="p-2">
            <div className="bg-white border-2 hover:border-warning rounded-xl p-4">
                <div>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus provident vel maxime, distinctio, culpa mollitia quam quis reprehenderit ratione veniam odio iusto adipisci error et voluptatem reiciendis aut ducimus veritatis</small>
                </div>
            </div>
            <div className="mt-3 flex items-center">
                <div className="avatar">
                    <div className="avatar">
                        <div className="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt="profile_image" />
                        </div>
                    </div>
                </div>
                <div className="ml-3">
                    <p><small>CEO OF PineApple</small></p>
                    <p className="text-lg">John doe</p>
                </div>
            </div>
        </div>
    );
};

export default Card;