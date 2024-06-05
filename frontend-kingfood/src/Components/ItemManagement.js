import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ItemManagement.module.css'; // Using CSS Module

function ItemManagement() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories
  const [newItem, setNewItem] = useState({
    itemName: '',
    quantity: '',
    cost: '',
    description: '',
    status: '',
    category: { categoryId: '', categoryName: '' }
  });
  const [editingItem, setEditingItem] = useState(null);
  const [editedItem, setEditedItem] = useState({
    itemName: '',
    quantity: '',
    cost: '',
    description: '',
    status: '',
    category: { categoryId: '', categoryName: '' }
  });

  useEffect(() => {
    fetchItems();
    fetchCategories(); // Fetch categories on component mount
  }, []);

  const fetchItems = async () => {
    try {
      console.log('Fetching items...');
      const response = await axios.get('http://localhost:8080/item/viewAllCustomer');
      console.log('Fetched items:', response.data); // Debugging
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      console.log('Fetching categories...');
      const response = await axios.get('http://localhost:8080/allCategory');
      console.log('Fetched categories:', response.data); // Debugging
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:8080/item/add', {
        itemName: newItem.itemName,
        quantity: newItem.quantity,
        cost: newItem.cost,
        description: newItem.description,
        status: newItem.status,
        category: newItem.category
      });
      console.log('Added item:', response.data); // Debugging
      setItems([...items, response.data]);
      setNewItem({
        itemName: '',
        quantity: '',
        cost: '',
        description: '',
        status: '',
        category: { categoryId: '', categoryName: '' }
      });
    } catch (error) {
      console.error('Error adding item:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }
  };

  const startEditing = (item) => {
    setEditingItem(item.itemId);
    setEditedItem({ ...item });
  };

  const cancelEditing = () => {
    setEditingItem(null);
    setEditedItem({
      itemName: '',
      quantity: '',
      cost: '',
      description: '',
      status: '',
      category: { categoryId: '', categoryName: '' }
    });
  };

  const saveEditing = async (id) => {
    try {
      await axios.put('http://localhost:8080/item/update', { ...editedItem, itemId: id });
      console.log('Updated item:', { ...editedItem, itemId: id }); // Debugging
      fetchItems();
      setEditingItem(null);
      setEditedItem({
        itemName: '',
        quantity: '',
        cost: '',
        description: '',
        status: '',
        category: { categoryId: '', categoryName: '' }
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/item/remove/${id}`);
      console.log('Deleted item with id:', id); // Debugging
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Quản lý Món Ăn</h1>
      <div className={styles.newItem}>
        <input
          type="text"
          value={newItem.itemName}
          onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })}
          placeholder="Tên Món Ăn Mới"
        />
        {/* Input fields for other item properties */}
        <input
          type="text"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          placeholder="Số lượng"
        />
        <input
          type="text"
          value={newItem.cost}
          onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
          placeholder="Giá"
        />
        <input
          type="text"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          placeholder="Mô tả"
        />
        <input
          type="text"
          value={newItem.status}
          onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
          placeholder="Tình trạng"
        />
        {/* Select dropdown for category */}
        <select
          value={newItem.category.categoryId}
          onChange={(e) => setNewItem({
            ...newItem,
            category: {
              categoryId: e.target.value,
              categoryName: e.target.options[e.target.selectedIndex].text
            }
          })}
        >
          <option value="0">Chọn Danh mục</option>
          {categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
          ))}
        </select>
        <button onClick={addItem}>Thêm Món</button>
      </div>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.itemId} className={styles.item}>
              {editingItem === item.itemId ? (
                <div>
                  <input
                    type="text"
                    value={editedItem.itemName}
                    onChange={(e) => setEditedItem({ ...editedItem, itemName: e.target.value })}
                  />
                  {/* Input fields for other item properties */}
                  <input
                    type="text"
                    value={editedItem.quantity}
                    onChange={(e) => setEditedItem({ ...editedItem, quantity: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedItem.cost}
                    onChange={(e) => setEditedItem({ ...editedItem, cost: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedItem.description}
                    onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedItem.status}
                    onChange={(e) => setEditedItem({ ...editedItem, status: e.target.value })}
                  />
                  {/* Select dropdown for category */}
                  <select
                    value={editedItem.category.categoryId}
                    onChange={(e) => setEditedItem({
                      ...editedItem,
                      category: {
                        categoryId: e.target.value,
                        categoryName: e.target.options[e.target.selectedIndex].text
                      }
                    })}
                  >
                    <option value="0">Chọn Loại</option>
                    {categories.map((category) => (
                      <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                    ))}
                  </select>
                  <button onClick={() => saveEditing(item.itemId)}>Lưu</button>
                  <button onClick={cancelEditing}>Hủy</button>
                </div>
              ) : (
                <div class className={styles.result}>
                  {/* Display other item properties */}
                  <span>Tên Món: {item.itemName}</span>
                  <span>Số lượng: {item.quantity}</span>
                  <span>Giá: {item.cost}</span>
                  <span>Mô tả: {item.description}</span>
                  <span>Tình trạng: {item.status}</span>
                  <span>Danh mục: {item.category.categoryName}</span>
                  <button onClick={() => startEditing(item)}>Chỉnh sửa</button>
                  <button className={styles.delete} onClick={() => deleteItem(item.itemId)}>Xóa</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>Không có item nào</li>
        )}
      </ul>
    </div>
  );
}

export default ItemManagement;
