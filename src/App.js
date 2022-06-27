import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import NumberArrange from './components/NumberArrange/NumberArrange';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

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
  const { showCards, showHeader, showNumberArrangeAndReset } = useFlags();

  return (
    <>
      {showHeader && <Header />}
      <div className='App'>
        <section className='grid-container'>
          {showCards && (
            <Grid>
              {searchNumber.map((num, i) => (
                <li key={num} className='number-grid'>
                  <h2>{num}</h2>
                </li>
              ))}
            </Grid>
          )}
        </section>
        {showNumberArrangeAndReset && (
          <NumberArrange
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            setDragNums={setDragNums}
            dragNums={dragNums}
          />
        )}
      </div>
    </>
  );
};

export default withLDProvider({
  clientSideID: process.env.REACT_APP_CLIENT_SIDE_ID,
  options: {
    bootstrap: 'localStorage',
  },
})(App);
