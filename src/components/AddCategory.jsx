import React from 'react';

export default function AddCategory(props) {
  const { categoryName, setCategoryName, createCategory } = props;
  return (
    <div>
      <input
        type='text'
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type='button' onClick={createCategory}>
        Add category
      </button>
    </div>
  );
}
