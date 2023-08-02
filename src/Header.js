import React, { useState, useEffect } from 'react';

function Header({ cartItems, onToggleCoffees, showCoffees }) {
  const [showCart, setShowCart] = useState(false);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showCart);
  }, [showCart]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand d-flex align-items-center">
        <button className="btn-transparent" onClick={onToggleCoffees}>
          <img src="/images/3Diamonds.svg" alt="Ma Boutique"  style={{ width: '275px',height :'200px' }}/>
        </button>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
      <h1 className="text-center">SM La précieuse</h1>
      </div>
      <div>
        <button className="btn btn-info" onClick={onToggleCoffees}>
          {showCoffees ? "Afficher les cafés" : "Afficher la boutique"}
        </button>
      </div>
      <div className="cart">
        <button type="button" className="btn btn-info" onClick={toggleCart}>
          {showCart ? 'Masquer le panier' : 'Afficher le panier'} ({cartItemCount})
        </button>
        {showCart && (
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Votre panier est vide</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.nom} ({item.quantity} x {item.prix}$)
                  </li>
                  ))}
                  <li>Total : {cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0)}$</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;