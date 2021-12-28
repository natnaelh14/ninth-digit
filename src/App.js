import React, { useState } from 'react';
import './App.css';
import NumberBox from './components/NumberBox/NumberBox';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

const NumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const [dragNums, setDragNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [searchNumber, setSearchNumber] = useState(NumberList);
  const handleSubmit = (e) => {
      setSearchNumber(dragNums);
  };
  const handleReset = (e) => {
    setSearchNumber(NumberList);
  };

  return (
    <>
      <Header />
      <div className='App'>
        {searchNumber.map((number) => {
          return <NumberBox number={number} key={number} />;
        })}
      </div>
      <SearchBox
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        setDragNums={setDragNums}
        dragNums={dragNums}
      />
    </>
  );
}

export default App;
