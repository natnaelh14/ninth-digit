import React from 'react';

const NumberBox = ({ number }) => {
  return (
    <div style={{ minWidth: '30%' }} className='tc bg-light-green dib br3 ph5-ns ma2 grow bw2 shadow-5'>
      <h2 style={{ fontSize: '5rem', textAlign: 'center' }}>{number}</h2>
    </div>
  );
};

export default NumberBox;
