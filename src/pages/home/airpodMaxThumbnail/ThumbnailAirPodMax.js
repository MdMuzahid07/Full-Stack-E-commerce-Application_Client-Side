import React from 'react';

const ThumbnailAirPodMax = () => {
    return (
        <section className="bg-slate-100 p-5 md:p-20 md:flex justify-between align-center gap-4 border rounded-xl mt-32">
            <div>
                <div className="flex align-center font-bold"><span class="material-symbols-outlined">
                    headphones
                </span>Get 5% discount</div>
                <div className="text-xl md:text-3xl lg:text-5xl text-warning font-bold mt-3 mb-10">
                    Ultra High Quality Sound Experience
                </div>
                <span className="font-bold text-black">All day long backup</span>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className="p-3 bg-black rounded-full">
                        <div className="text-xl font-bold text-center text-warning">2 Days</div>
                    </div>
                    <div className="p-3 bg-black rounded-full">
                        <div className="text-xl font-bold text-center text-warning">7 Hours</div>
                    </div>
                    <div className="p-3 bg-black rounded-full">
                        <div className="text-xl font-bold text-center text-warning">70 Sec</div>
                    </div>
                </div>
            </div >
            <div className="ThumbnailAirPodMax_Image">
                <img src="https://i.ibb.co/G0D2zxw/Untitled-design-removebg-preview.png" alt="Apple_AorPod_Max" />
            </div>
        </section >
    );
};

export default ThumbnailAirPodMax;