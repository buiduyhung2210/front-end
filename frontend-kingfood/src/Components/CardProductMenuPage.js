import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './CardProductMenuPage.module.css';
import cardData from '../Datas/CardProductMenuPageData';

function CardProductMenuPage() {
  return (
    <div className={styles.cardContainer}>
      {cardData.map(item => (
        <Card key={item.id}>
          <Card.Img className={styles.cardImg} variant="top" src={item.imgSrc} />
          <Card.Body className="card-body">
            <div>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.text}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardProductMenuPage;
