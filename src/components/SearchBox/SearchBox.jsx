import React from 'react';
import Number from '../Number/Number';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Button, NumberArrangeContainer } from './SearchBox.styles';

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
    <NumberArrangeContainer>
      <SortableGifsContainer
        axis='x'
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {dragNums.map((num, i) => (
          <SortableGif index={i} key={i} num={num} />
        ))}
      </SortableGifsContainer>
      <Button className='pv2 ph3 ma3 grow' onClick={handleSubmit}>
        REARRANGE NUMBER
      </Button>
      <Button className='pv2 ph3 ma3 grow' onClick={handleReset}>
        RESET
      </Button>
    </NumberArrangeContainer>
  );
};

export default SearchBox;
