import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalCardProductMenuPage.module.css';
import { getProductDescription } from '../Datas/ModalCardProductMenuPageData'; // Import function to get description

function ModalCardProductMenuPage({ show, handleClose, product, updateCartQuantity }) {
  // Parse initial price from product
  const initialPrice = product.cost;
  
  // State variables
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(initialPrice);
  const [description, setDescription] = useState('');

  // Get description from external data source
  useEffect(() => {
    // Check if product already has a description
    if (product.description) {
      setDescription(product.description);
    } else {
      const fetchedDescription = getProductDescription(product.itemId); // Assuming you have a function to get description
      setDescription(fetchedDescription);
    }
  }, [product.itemId, product.description]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10); // Parse as base 10 integer
    setQuantity(newQuantity);
    setSubtotal(newQuantity * initialPrice);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    updateCartQuantity(quantity); // Gọi hàm updateCartQuantity từ props
    console.log(`Added ${quantity} of ${product.itemName} to cart`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{product.itemName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.itemName} className={styles.productImage} />
        </div>
        <div className={styles.infoContainer}>
          <p><strong>Đơn giá:</strong> {product.cost.toLocaleString()} Vnd / Set</p>
          <p><strong>Trạng thái:</strong> {product.status}</p>
          <p><strong>Mô tả:</strong> {description}</p> {/* Use fetched description */}
          <p><strong>Danh mục:</strong> {product.category.categoryName}</p>
          <div className={styles.quantityContainer}>
            <label htmlFor="quantity"><strong>Số lượng:</strong></label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className={styles.quantityInput}
            />
          </div>
          <p><strong>Thành tiền (tạm tính):</strong> {subtotal.toLocaleString()} Vnd</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Thoát
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Đặt món
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCardProductMenuPage;
