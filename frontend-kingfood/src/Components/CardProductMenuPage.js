import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './CardProductMenuPage.module.css';
import cardData from '../Datas/CardProductMenuPageData';

function CardProductMenuPage() {
  return (
    <div className='container'>
      <div className={styles.cardContainer}>
        {cardData.map(item => (
          <Card key={item.id} className={styles.card}>
            <div className={styles.discountBadge}>10% OFF</div>
            <Card.Img className={styles.cardImg} variant="top" src={item.imgSrc} />
            <Card.Body className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.ratingBadge}>{item.rating} ★</div>
              </div>
              <div className={styles.cardTextRow}>
                <div className={styles.cardText}>{item.description}</div>
                <div className={styles.footerLeft}>{item.price}</div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.status}>{item.status}</div>
                <div className={styles.footerRight}>{item.time}</div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardProductMenuPage;
