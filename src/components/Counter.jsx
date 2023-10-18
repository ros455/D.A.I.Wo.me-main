import React, { useState, useEffect } from 'react';

const Counter = ({ val }) => {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    if (currVal < val) {
      setTimeout(setCurrVal, 0, currVal + val/300);
    } else {
      setCurrVal(Math.min(currVal, val));
    }
  }, [currVal]);

  return (
    <div className='number_block_profile'>
        <div style={{color:'#7DD1C1'}}>
          <p>{currVal.toFixed(0)}</p>
        </div>
    </div>

  );
};

export default Counter;