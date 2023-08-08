import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartAdd from './CartAdd';


function Product(props) {
  const {id, name, description, price, image, category, updateCartLength} = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
  return (
    <div className="card col-4 product-card">
      <img src={image} alt={name} className="card-img-top" style={{ width: '400px',height :'300px' }}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price.toFixed(2)}$</p>
        <p className="card-text">{category}</p>
       
        <div className="d-flex justify-content-between align-items-end">
        <CartAdd productId={id} updateCartLength={updateCartLength}/>
          
          <div>
            <div>
              <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body><ProductDetail product={props}/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fermer
                </Button>
              </Modal.Footer>
              </Modal>
              <Button variant="primary" onClick={handleShow}>
                Détails
              </Button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;