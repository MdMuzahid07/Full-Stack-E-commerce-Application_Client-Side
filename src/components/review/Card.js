import React from 'react';

const Card = () => {
    return (
        <div className="p-2">
            <div className="bg-white border-2 hover:border-warning rounded-xl p-4">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus provident vel maxime, distinctio, culpa mollitia quam quis reprehenderit ratione veniam odio iusto adipisci error et voluptatem reiciendis aut ducimus veritatis. Repellat adipisci iure, recusandae quae rem reprehenderit officia eaque aliquam totam doloremque perspiciatis autem cum fuga aliquid sint deserunt.</span>
            </div>
            <div className="mt-5 flex items-center">
                <div className="avatar">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt="profile_image" />
                        </div>
                    </div>
                </div>
                <div className="ml-3">
                    <p><small>CEO OF PineApple</small></p>
                    <p className="text-xl">John doe</p>
                </div>
            </div>
        </div>
    );
};

export default Card;