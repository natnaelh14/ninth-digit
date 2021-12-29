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
      }}
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
      <div className='pa2'>
        <button
          className='pv2 ph3 ma3 grow'
          style={{
            backgroundColor: '#b39bdc',
            fontWeight: 'bold',
            color: 'black',
            fontSize: '1.5rem',
          }}
          onClick={handleSubmit}
        >
          REARRANGE NUMBER
        </button>
      </div>
      <div className='pa2'>
        <button
          className='pv2 ph3 ma3 grow'
          style={{
            backgroundColor: '#b39bdc',
            fontWeight: 'bold',
            color: 'black',
            fontSize: '1.5rem',
          }}
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
