import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CustomerManagement.module.css'; // Using CSS Module

function CustomerManagement() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ firstName: '', lastname: '', email: '', password: '', image: '' });
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({ firstName: '', lastname: '', email: '', password: '', image: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewAllCustomer');
      console.log('Fetched customers:', response.data); // Debugging
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const addCustomer = async () => {
    try {
      const response = await axios.post('http://localhost:8080/AddCustomer', {
        firstName: newCustomer.firstName,
        lastname: newCustomer.lastname,
        email: newCustomer.email,
        password: newCustomer.password,
        image: newCustomer.image,
      });
      console.log('Added customer:', response.data); // Debugging
      setCustomers([...customers, response.data]);
      setNewCustomer({ firstName: '', lastname: '', email: '', password: '', image: '' });
    } catch (error) {
      console.error('Error adding customer:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    }
  };

  const startEditing = (customer) => {
    setEditingCustomer(customer.customerId);
    setEditedCustomer({
      firstName: customer.firstName,
      lastname: customer.lastname,
      email: customer.email,
      password: customer.password,
      image: customer.image,
    });
  };

  const cancelEditing = () => {
    setEditingCustomer(null);
    setEditedCustomer({ firstName: '', lastname: '', email: '', password: '', image: '' });
  };

  const saveEditing = async (id) => {
    try {
      await axios.put('http://localhost:8080/updateCustomer', { ...editedCustomer, customerId: id });
      console.log('Updated customer:', { ...editedCustomer, customerId: id }); // Debugging
      fetchCustomers();
      setEditingCustomer(null);
      setEditedCustomer({ firstName: '', lastname: '', email: '', password: '', image: '' });
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/removeCustomer/${id}`);
      console.log('Deleted customer with id:', id); // Debugging
      fetchCustomers();
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Quản lý Khách hàng</h1>
      <div className={styles.newCustomer}>
        <input
          type="text"
          value={newCustomer.firstName}
          onChange={(e) => setNewCustomer({ ...newCustomer, firstName: e.target.value })}
          placeholder="Tên"
        />
        <input
          type="text"
          value={newCustomer.lastname}
          onChange={(e) => setNewCustomer({ ...newCustomer, lastname: e.target.value })}
          placeholder="Họ"
        />
        <input
          type="email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          value={newCustomer.password}
          onChange={(e) => setNewCustomer({ ...newCustomer, password: e.target.value })}
          placeholder="Mật khẩu"
        />
        <input
          type="text"
          value={newCustomer.image}
          onChange={(e) => setNewCustomer({ ...newCustomer, image: e.target.value })}
          placeholder="URL Hình ảnh"
        />
        <button onClick={addCustomer}>Thêm Khách hàng</button>
      </div>
      <ul>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <li key={customer.customerId} className={styles.customerItem}>
              {editingCustomer === customer.customerId ? (
                <div>
                  <input
                    type="text"
                    value={editedCustomer.firstName}
                    onChange={(e) => setEditedCustomer({ ...editedCustomer, firstName: e.target.value })}
                    placeholder="Tên"
                  />
                  <input
                    type="text"
                    value={editedCustomer.lastname}
                    onChange={(e) => setEditedCustomer({ ...editedCustomer, lastname: e.target.value })}
                    placeholder="Họ"
                  />
                  <input
                    type="email"
                    value={editedCustomer.email}
                    onChange={(e) => setEditedCustomer({ ...editedCustomer, email: e.target.value })}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    value={editedCustomer.password}
                    onChange={(e) => setEditedCustomer({ ...editedCustomer, password: e.target.value })}
                    placeholder="Mật khẩu"
                  />
                  <input
                    type="text"
                    value={editedCustomer.image}
                    onChange={(e) => setEditedCustomer({ ...editedCustomer, image: e.target.value })}
                    placeholder="URL Hình ảnh"
                  />
                  <button onClick={() => saveEditing(customer.customerId)}>Lưu</button>
                  <button onClick={cancelEditing}>Hủy</button>
                </div>
              ) : (
                <div>
                  <span>Tên: {customer.firstName}</span>
                  <span>Họ: {customer.lastname}</span>
                  <span>Email: {customer.email}</span>
                  {customer.image && <img src={customer.image} alt={customer.firstName} className={styles.customerImage} />}
                  <button className={styles.result_item} onClick={() => startEditing(customer)}>Chỉnh sửa</button>
                  <button className={styles.delete} onClick={() => deleteCustomer(customer.customerId)}>Xóa</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>Không có khách hàng nào</li>
        )}
      </ul>
    </div>
  );
}

export default CustomerManagement;
