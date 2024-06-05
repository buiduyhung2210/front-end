import React, { useState } from 'react';
import CategoryManagement from '../Components/CategoryManagement';
import ItemManagement from '../Components/ItemManagement';
import CustomerManagement from '../Components/CustomerManagement';
import styles from '../Styles/AdminPage.module.css'; // Using CSS Module

function AdminPage() {
  const [activeComponent, setActiveComponent] = useState('category');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'food':
        return <ItemManagement />;
      case 'customer':
        return <CustomerManagement />;
      case 'category':
      default:
        return <CategoryManagement />;
    }
  };

  return (
    <div className={styles['admin-container']}>
        <div className={styles['navbar-content']}>
            <h1>KINGFOOD</h1>
        </div>
        <div className={styles['navbar-content2']}>
            <h1>ADMIN</h1>
        </div>   
        <div className={styles['admin-navbar']}>
            <button onClick={() => setActiveComponent('food')}>Quản lý Món ăn</button>
            <button onClick={() => setActiveComponent('category')}>Quản lý Danh mục</button>
            <button onClick={() => setActiveComponent('customer')}>Quản lý Khách hàng</button>
        </div>
        <div className={styles['admin-content']}>
            {renderComponent()}
        </div>
        </div>
  );
}

export default AdminPage;
