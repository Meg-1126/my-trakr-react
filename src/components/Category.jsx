import React, { useState } from 'react';
import axios from 'axios';

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
    axios
      .post('/categories', {newCategory})
      .then((res) => {
        console.log('res', res);
        setCategories([...categories, {...res.data.name}]);
      })
      .catch((err) => console.log('err', err));
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
