import React, { useState } from 'react';

export default function Category(props) {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const createCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
    };
    const newCategories = [...categories, newCategory];
    setCategories(newCategories);
  };
  return (
    <div>
      <label htmlFor='category'>Category:</label>
      <select name='category' onChange={props.handleChange} defaultValue=''>
        <option value=''>Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
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
