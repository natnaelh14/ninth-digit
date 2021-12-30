import React from 'react';
import Number from '../Number/Number';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const SearchBox = ({ handleSubmit, handleReset, dragNums, setDragNums }) => {
  const SortableGifsContainer = sortableContainer(({ children }) => (
    <div className='gifs'>{children}</div>
  ));
  const SortableGif = sortableElement(({ num }) => (
    <Number key={num} num={num} />
  ));
  const onSortEnd = ({ oldIndex, newIndex }) =>
    setDragNums(arrayMoveImmutable(dragNums, oldIndex, newIndex));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
      className='footer'
    >
      <SortableGifsContainer
        axis='x'
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {dragNums.map((num, i) => (
          <SortableGif index={i} key={i} num={num} />
        ))}
      </SortableGifsContainer>
      <button
        className='pv2 ph3 ma3 grow'
        style={{
          backgroundColor: '#b39bdc',
          fontWeight: 'bold',
          color: 'black',
          fontSize: '1.5rem',
          borderRadius: '12px',
        }}
        onClick={handleSubmit}
      >
        REARRANGE NUMBER
      </button>
      <button
        className='pv2 ph3 ma3 grow'
        style={{
          backgroundColor: '#b39bdc',
          fontWeight: 'bold',
          color: 'black',
          fontSize: '1.5rem',
          borderRadius: '12px',
        }}
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};

export default SearchBox;
