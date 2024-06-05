import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CategoryManagement.module.css'; // Using CSS Module

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ categoryName: '' });
  const [editingCategory, setEditingCategory] = useState(null);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allCategory');
      console.log('Fetched categories:', response.data); // Debugging
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addCategory = async () => {
    try {
      const response = await axios.post('http://localhost:8080/addCategory', { categoryName: newCategory.categoryName });
      console.log('Added category:', response.data); // Debugging
      setCategories([...categories, response.data]);
      setNewCategory({ categoryName: '' });
    } catch (error) {
      console.error('Error adding category:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }
  };

  const startEditing = (category) => {
    setEditingCategory(category.categoryId);
    setEditedName(category.categoryName);
  };

  const cancelEditing = () => {
    setEditingCategory(null);
    setEditedName('');
  };

  const saveEditing = async (id) => {
    try {
      await axios.put('http://localhost:8080/updateCategory', { categoryId: id, categoryName: editedName });
      console.log('Updated category:', { categoryId: id, categoryName: editedName }); // Debugging
      fetchCategories();
      setEditingCategory(null);
      setEditedName('');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteCategory/${id}`);
      console.log('Deleted category with id:', id); // Debugging
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Quản lý Danh mục</h1>
      <div className={styles.newCategory}>
        <input
          type="text"
          value={newCategory.categoryName}
          onChange={(e) => setNewCategory({ ...newCategory, categoryName: e.target.value })}
          placeholder="Tên Danh mục Mới"
        />
        <button onClick={addCategory}>Thêm Danh mục</button>
      </div>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.categoryId} className={styles.categoryItem}>
              {editingCategory === category.categoryId ? (
                <div>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <button onClick={() => saveEditing(category.categoryId)}>Lưu</button>
                  <button onClick={cancelEditing}>Hủy</button>
                </div>
              ) : (
                <div >
                  <span>Thể Loại Món Ăn: {category.categoryName}</span> {/* Displaying category name */}
                  <button className={styles.result_item} onClick={() => startEditing(category)}>Chỉnh sửa</button>
                  <button className={styles.delete} onClick={() => deleteCategory(category.categoryId)}>Xóa</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>Không có danh mục nào</li>
        )}
      </ul>
    </div>
  );
}

export default CategoryManagement;
