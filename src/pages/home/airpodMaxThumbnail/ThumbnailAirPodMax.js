import React from 'react';

const ThumbnailAirPodMax = () => {
    return (
        <section className="bg-slate-100 p-5 md:p-20 grid md:grid-cols-2 gap-4 border rounded-xl">
            <div>
                <div className="flex align-center font-bold"><span class="material-symbols-outlined">
                    headphones
                </span>Get 5% discount</div>
                <div className="text-xl md:text-5xl text-warning font-bold my-3">
                    Ultra High Quality Sound Experience
                </div>
                <span className="font-bold text-black">All day long backup</span>
                <div className="grid grid-cols-3 gap-4 mt-7">
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
            <div>

            </div>
        </section >
    );
};

export default ThumbnailAirPodMax;