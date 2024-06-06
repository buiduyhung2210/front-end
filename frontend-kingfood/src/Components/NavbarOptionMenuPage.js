import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProductMenuPage from './CardProductMenuPage';
import styles from './NavbarOptionMenuPage.module.css';

const NavbarOptionMenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allCategory');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/item/viewAllCustomer');
      setItems(response.data);
      setFilteredItems(response.data); // Set filtered items initially to all items
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName) {
      const filtered = items.filter(item => item.category.categoryName === categoryName);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items); // Show all items when no category is selected
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {categories.map((category) => (
          <div
            key={category.categoryId}
            className={styles.navItem}
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            <img
              src={category.image || 'default-image-url.jpg'}
              alt={category.categoryName}
              className={`${styles.navIcon} ${styles.largeIcon}`}
            />
            <span className={styles.navTitle}>{category.categoryName}</span>
          </div>
        ))}
        <div
          className={styles.navItem}
          onClick={() => handleCategoryClick(null)} // Handle the case when no category is selected
        >
        </div>
      </div>
      <div className={styles.items}>
        {selectedCategory !== null ? (
          filteredItems.length > 0 ? (
            <CardProductMenuPage items={filteredItems} />
          ) : (
            <p>Không tìm thấy món ăn thuộc loại này.</p>
          )
        ) : (
          <CardProductMenuPage items={items} /> // Show all items initially
        )}
      </div>
    </div>
  );
};

export default NavbarOptionMenuPage;
