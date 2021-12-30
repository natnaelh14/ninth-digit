import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import NumberArrange from './components/NumberArrange/NumberArrange';

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  const [dragNums, setDragNums] = useState(numbersArray);
  const [searchNumber, setSearchNumber] = useState(numbersArray);
  const handleSubmit = (e) => {
    setSearchNumber(dragNums);
  };
  const handleReset = (e) => {
    setSearchNumber(numbersArray);
  };

  return (
    <>
      <Header />
      <div className='App'>
        <section className='grid-container'>
          <Grid>
            {searchNumber.map((num, i) => (
              <li key={num} className='number-grid'>
                <h2>{num}</h2>
              </li>
            ))}
          </Grid>
        </section>
        <NumberArrange
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
