import React from 'react';

const Number = ({ num }) => {
  return (
    <div 
    className='tc dib br3 ph3-ns ma2 grow bw2 shadow-5'
    style={{ backgroundColor:'#f39b8e' }}
    >
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{num}</p>
    </div>
  );
};

export default Number;
