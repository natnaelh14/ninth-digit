import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

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
  const SortableGifsContainer = sortableContainer(({ children }) => (
    <div className='gifs'>{children}</div>
  ));
  const SortableGif = sortableElement(({ number }) => (
    <Card key={number} number={number} />
  ));
  const onSortEnd = ({ oldIndex, newIndex }) =>
  setSearchNumber(arrayMoveImmutable(searchNumber, oldIndex, newIndex));
  return (
    <>
      <Header />
      <div className='App'>
        <SortableGifsContainer
          axis='xy'
          onSortEnd={onSortEnd}
          onSortStart={(_, event) => event.preventDefault()}
        >
          {searchNumber.map((num, i) => (
            <SortableGif index={i} key={i} number={num} />
          ))}
        </SortableGifsContainer>
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
