import React, { useState } from 'react';

function CartAdd({ productId, updateCartLength }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        const productData = {
            productId: productId,
            quantity: quantity
        };
        fetch("https://insta-api-api.0vxq7h.easypanel.host/cart/add-product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(() => {
        
          updateCartLength((length) => length + quantity);
        })
        .catch((error) => console.log('Erreur lors de la création des données: ', error));
    }
    return (
        <div>
        <div className="quantity-selector d-flex">
          <button className="btn btn-primary decrement-button btn-add-to-cart" onClick={handleDecrement}>-</button>
          <p className="quantity-text quantity-width text-center">{quantity}</p>
          <button className="btn btn-primary increment-button btn-add-to-cart" onClick={handleIncrement}>+</button>
        </div>
        <button className="btn btn-primary btn-add-to-cart" onClick={handleSubmit}>Ajouter au panier</button>
      </div>
    )
}

export default CartAdd;