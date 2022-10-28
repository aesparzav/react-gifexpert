import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// giphy key   1NT9ZQ8A1nR2Dw24M6CdPaeFzegPsarV
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  // 'One Punch', 'Dragon Ball Z';

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
