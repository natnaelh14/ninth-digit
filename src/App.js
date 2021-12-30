import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

const resetNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  const [dragNums, setDragNums] = useState(resetNumber);
  const [searchNumber, setSearchNumber] = useState(resetNumber);
  const handleSubmit = (e) => {
    setSearchNumber(dragNums);
  };
  const handleReset = (e) => {
    setSearchNumber(resetNumber);
  };

  return (
    <>
      <Header />
      <div className='App'>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}
        >
          <Grid>
            {searchNumber.map((num, i) => (
              <li
                key={num}
                style={{ minWidth: '30%' }}
                className='boxest'
              >
                <h2 style={{ fontSize: '4rem', textAlign: 'center' }}>{num}</h2>
              </li>
            ))}
          </Grid>
        </div>
        <SearchBox
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          setDragNums={setDragNums}
          dragNums={dragNums}
        />
      </div>
    </>
  );
};

export default App;
