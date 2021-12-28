import React from 'react';

const SearchBox = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div className='pa2'>
        <input
          className='pa3 bb br3 grow ma3'
          style={{ borderColor: '#f39b8e', borderWidth: 'thick' }}
          type='search'
          placeholder='Type 9 digit number'
        />
      </div>
      <div className='pa2'>
        <button className='pv2 ph3 ma3 grow' style={{ backgroundColor: '#f39b8e', color: 'black', fontSize: '1.5rem' }}>
          REARRANGE NUMBER
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
