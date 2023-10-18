import React from 'react';

const DisplayArray = () => {
    return (
        <>
         {[...Array(40)].map((_, i) => (
                <div key={i} className={`line__1 wave-${i+1} wave`}></div>
            ))}   
        </>
    );
};

export default DisplayArray;