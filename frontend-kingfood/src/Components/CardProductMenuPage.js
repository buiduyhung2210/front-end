// CardProductMenuPage.js

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ModalCardProductMenuPage from './ModalCardProductMenuPage';
import styles from './CardProductMenuPage.module.css';
import cardData from '../Datas/CardProductMenuPageData';

function CardProductMenuPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className='container'>
      <div className={styles.cardContainer}>
        {cardData.map(item => (
          <Card key={item.id} className={styles.card} onClick={() => handleShowModal(item)}>
            <div className={styles.discountBadge}>10% OFF</div>
            <Card.Img className={styles.cardImg} variant="top" src={item.imgSrc} />
            <Card.Body className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.ratingBadge}>{item.rating} ★</div>
              </div>
              <div className={styles.cardTextRow}>
                <div className={styles.cardText}>{item.description}</div>
                <div className={styles.footerLeft}>{`${item.price.toLocaleString()} Vnd / Set`}</div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.status}>{item.status}</div>
                <div className={styles.footerRight}>{item.time}</div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <ModalCardProductMenuPage
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default CardProductMenuPage;
