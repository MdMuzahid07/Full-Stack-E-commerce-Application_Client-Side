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
            <button onClick={handleClickToTop} className="btn btn-warning btn-outline btn-circle" >
                <span class="material-symbols-outlined">
                    keyboard_arrow_up
                </span>
            </button>
        </div>
    );
};

export default ClickToTop;