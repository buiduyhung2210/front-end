import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalCardProductMenuPage.module.css';
import { getProductDescription } from '../Datas/ModalCardProductMenuPageData'; // Import function to get description

function ModalCardProductMenuPage({ show, handleClose, product, updateCartQuantity }) {
  // Parse initial price from product
  const initialPrice = product.price;
  
  // State variables
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(initialPrice);
  const [description, setDescription] = useState('');

  // Get description from external data source
  useEffect(() => {
    const description = getProductDescription(product.id); // Assuming you have a function to get description
    setDescription(description);
  }, [product.id]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setSubtotal(newQuantity * initialPrice);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    updateCartQuantity(quantity); // Gọi hàm updateCartQuantity từ props
    console.log(`Added ${quantity} of ${product.title} to cart`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.imageContainer}>
          <img src={product.imgSrc} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.infoContainer}>
          <p><strong>Đánh giá:</strong> {product.rating}</p>
          <p><strong>Đơn giá:</strong> {product.price.toLocaleString()} Vnd / Set</p>
          <p><strong>Trạng thái:</strong> {product.status}</p>
          <p><strong>Time:</strong> {product.time}</p>
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
          <div className={styles.descriptionContainer}>
            <label><strong></strong></label> 
            <p className={styles.descriptionText}>{description}</p>
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
