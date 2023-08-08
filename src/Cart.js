import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartDeleteProduct from './CartDeleteProduct.js';
import CartDeleteAll from './CartDeleteAll.js';
import CartProductQuantity from './CartProductQuantity.js';

function Cart({ onCartLength}) {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    
    const totalPrice = cart.reduce((total, product) => {
      return total + (product.price / 100) * product.quantity;
    }, 0);

    function getCart() {
        fetch("https://insta-api-api.0vxq7h.easypanel.host/cart")
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setCart(response);
            const total = response.reduce((acc, product) => acc + product.quantity, 0);
            onCartLength(total);
        })
        .catch((error) => console.log('Erreur lors du chargement des données: ', error));
    }
    useEffect(() => {
        getCart();
    }, [])

    const handleQuantityUpdate = () => {
      getCart(); 
    };
    

  return (
    <Container className="my-4">
        <>
          {loading ? (
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              <h2>
                Mon Panier{' '}
              </h2>
              <Row>
                {cart.map(product => (
                  <Col productId={product.id} md={4}>
                    <div className="card mb-4 product-card">
                      <img src={product.image} alt={product.name} className="card-img-top" style={{ width: '400px', height: '225px' }} />
                      <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{product.name} <CartProductQuantity productId={product.id} quantity={product.quantity} onQuantityUpdate={handleQuantityUpdate}/></h5>
                        <CartDeleteProduct id={product.id} onQuantityUpdate={handleQuantityUpdate}/>
                      </div>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{(product.price / 100).toFixed(2)}$</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="d-flex justify-content-start align-items-center">
                <h2 style={{ marginRight: '20px' }} >Total: {totalPrice.toFixed(2)}$</h2>
                <CartDeleteAll onQuantityUpdate={handleQuantityUpdate}/>
              </div>
            </>
        
           )}
        </>
    </Container>
  );
}

export default Cart;