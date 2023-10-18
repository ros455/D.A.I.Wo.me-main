import React, { useState, useEffect } from 'react';
import '../style/another-style/table.scss';

const CounterYear = ({ firstValue, val, time, isBool }) => {
  const [currVal, setCurrVal] = useState(firstValue);
  const [parseArr, setParsArr] = useState([]);
  const [dafaultArr, setDefaultArr] = useState([]);

  useEffect(() => {
    setDefaultArr(Array.from({ length: parseArr.length }).fill('1'))
  },[parseArr])



  useEffect(() => {
    const iterations = Math.ceil(Math.abs(val - firstValue) / 0.000001);
    const timePerIteration = 31536000000 / iterations;

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - time;
      const newValue = Math.min(val, firstValue + (elapsedTime / timePerIteration) * 0.000001);
      setCurrVal(newValue);
      if (newValue === val) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, [time, val, firstValue]);

  useEffect(() => {
    const digits = currVal.toFixed(15).toString().split('.');
    const beforeDot = isBool ? digits[0].padStart(15, '0') : digits[0].padStart(0, '0');
    const afterDot = digits.length > 1 ? digits[1].padEnd(15, '0') : Array.from({ length: 15 }).fill('0').join('');
    setParsArr(beforeDot.split('').concat('.', afterDot.split('')));
  }, [currVal]);



  // Change

  return (
      <div className='number_block'>
        <>
              {parseArr &&
      dafaultArr.map((num, idx) => (
        <div key={idx} className={`${parseArr[idx] == '.' ? 'dot' : 'main_number'} ${parseArr[idx] == 9 ? 'active_number' : ''} number`} >
            <p className='after_number'>
            {!isNaN(parseArr[idx]) 
            ?
            <>
            {Number(parseArr[idx]) + 2 == 10 ? '0' : ''}
            {Number(parseArr[idx]) + 2 == 11 ? '1' : ''}
            {Number(parseArr[idx]) + 2 < 10 && Number(parseArr[idx]) + 2 != 10 ? Number(parseArr[idx]) + 2 : ''}
            </>
            : 
            ''}
           </p>
           <p className='after_number'>
            {!isNaN(parseArr[idx]) 
            ?
            Number(parseArr[idx]) + 1 == 10 ? '0' : Number(parseArr[idx]) + 1
            : 
            ''}
           </p>
          <div className={`${parseArr[idx] == '.' ? 'dot' : ''} main_number`}>
            <h1 className={`${idx - 1 < parseArr.indexOf('.') ? 'purpure' : ''}`}>
            {parseArr[idx]}
            </h1>
          </div>
          <p className='before_number'>
            {!isNaN(parseArr[idx]) 
            ?
            parseArr[idx] - 1 < 0 ? '9' : parseArr[idx] - 1 
            : 
            ''}
           </p>
           <p className='before_number'>
            {!isNaN(parseArr[idx])
            ?
            <>
            {parseArr[idx] - 2 == -2 ? '8' : ''}
            {parseArr[idx] - 2 == -1 ? '9' : ''}
            {Number(parseArr[idx]) - 2 > -1 ? Number(parseArr[idx]) - 2 : ''}
            </>
            : 
            ''}
           </p>
        </div>
      ))}
        </>
    </div>
  );
};

export default CounterYear;