import React from 'react';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputchange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    // console.log(inputValue);
    // onNewCategory((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputchange}
      />
    </form>
  );
};
