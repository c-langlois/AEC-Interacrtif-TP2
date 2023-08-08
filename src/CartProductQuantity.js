import React from 'react';

function CartProductQuantity(props) {
    const { productId, quantity } = props;
  
    const updateQuantity = (increment) => {
      const newQuantity = increment ? quantity + 1 : quantity - 1;
  
      const productData = {
        quantity: newQuantity
      };

      fetch(`https://insta-api-api.0vxq7h.easypanel.host/cart/modify-product-quantity/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
      })
        
        .then(response => {
          props.onQuantityUpdate();
        })
        .catch(error => {
        console.error("Erreur lors de la modification de quantité:", error);
        });
    };

    return (
        <div className="quantity-selector d-flex">
          <button className="btn btn-primary decrement-button btn-add-to-cart" onClick={() => updateQuantity(false)}>-</button>
          <p className="quantity-text quantity-width text-center">{quantity}</p>
          <button className="btn btn-primary increment-button btn-add-to-cart" onClick={() => updateQuantity(true)}>+</button>
        </div>



    );
}

export default CartProductQuantity;