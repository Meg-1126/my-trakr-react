import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AddCategory from './AddCategory';
export default function Category(props) {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const selectCategoryRef = useRef();
  useEffect(() => {
    axios.get('/categories').then((response) => {
      console.log('data', response.data);
      setCategories([...response.data]);
    });
  }, []);

  const createCategory = () => {
    axios.post('/categories', { newCategory: categoryName }).then((res) => {
      console.log('post categories', res.data);
      setCategories([...categories, res.data]);
    });
  };
  const categoriesOptions = categories.map((category) => (
    <option key={category.id} value={category.name}>
      {category.name}
    </option>
  ));

  console.log('render category component');
  return (
    <div>
      <label htmlFor='category'>Category:</label>
      <select
        name='category'
        defaultValue=''
        onChange={props.handleChange}
        ref={selectCategoryRef}>
        <option value=''>Select a category</option>
        {categoriesOptions}
        <option value='add-new'>Add new category</option>
      </select>
      {selectCategoryRef.current.value === 'add-new' && (
        <AddCategory
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          createCategory={createCategory}
        />
      )}
    </div>
  );
}
