import React from 'react';

const ClickToTop = () => {

    const handleClickToTop = () => {
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <div style={
            {
                position: "fixed",
                right: "20px",
                bottom: "50px"
            }
        }>
            <button onClick={handleClickToTop} className="btn btn-outline btn-circle lg:mr-10 lg:mb-10" >
                <span className="material-symbols-outlined">
                    keyboard_arrow_up
                </span>
            </button>
        </div>
    );
};

export default ClickToTop;