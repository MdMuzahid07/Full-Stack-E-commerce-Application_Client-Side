import React from 'react';

const GoogleMap = () => {
    return (
        <section className="my-10">
            <iframe className="rounded-xl" style={{ width: "100%", height: "500px" }} title="map" frameborder="0" scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Dhaka,%20bangladesh,%20earth%20Dhaka,%20bangladesh+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
    );
};

export default GoogleMap;