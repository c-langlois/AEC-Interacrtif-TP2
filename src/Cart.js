import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Cart({ cartItems, removeFromCart, emptyCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.prix, 0);

  function multiplication(quantity, prix) {
    return(quantity * prix).toFixed(2);
  }
  return (
    <Container className="my-4">
      <h2>Mon Panier</h2>
      <p>Total d'articles: {totalItems}</p>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <Row key={item.id} className="my-2">
              <Col xs={2}>{item.nom}</Col>
              <Col xs={1}>{item.quantity}</Col>{console.log(item.quantity+ ' '+ item.prix)}
              <Col xs={1}>{multiplication(item.quantity,item.prix)}$</Col>
              <Col xs={1}>
              
                <Button variant="outline-danger" onClick={() => removeFromCart(item)}>
                  Supprimer
                </Button>
              </Col>
            </Row>
          ))}
          <div className="cart-total"><p>Total: {totalPrice.toFixed(2)}$</p></div>
          <div className="d-flex justify-content">
            <Button variant="outline-danger" onClick={emptyCart}>
              Vider le panier
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Cart;