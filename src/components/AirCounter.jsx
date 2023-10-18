import React from 'react';
const AirCounter = ({lastAir, angle}) => {
    return (
        <div className='card_item_two'>
            <div className='air__speed profile_air'>
                <div className='back__big-circle'></div>
                <div className='eclipse-gradient'></div>
                <div className='eclipse-gradient-second'></div>
                <div className='eclipse-speed'></div>
            </div>
            <div className='back__small-circle'></div>
            <div className='circule-absolute'>
                <div className='circle'>
                    <div className='debug debug-profile'>
                        {lastAir && lastAir}
                    </div>
                    <div className="dot dot-profile" style={{ transform: `rotate(${angle ? angle : 210}deg)` }}></div>
                </div>
            </div>
        </div>
    );
};

export default AirCounter;