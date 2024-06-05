import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCardProductMenuPage({ show, handleClose, product }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imgSrc} alt={product.title} style={{ width: '100%' }} />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Status: {product.status}</p>
        <p>Time: {product.time}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCardProductMenuPage;
