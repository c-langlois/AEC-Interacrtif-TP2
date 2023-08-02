import React from 'react';
import WishlistAdd from './WishlistAdd'

function addWishList() {
  console.log('ajouter');
  <WishlistAdd/>
}

const ProductDetail = ({ product }) => {
  return (
    <div className="d-flex flex-column">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price}$</p>
      <img className="coffee-img-mini" src={product.image} alt={product.name} />
      <p>Type: {product.category}</p>
      <p>Couleur: {product.color}</p>
      <button onClick={addWishList} className="btn btn-primary">Ajouter à la liste de souhait</button>
    </div>
  );
};

export default ProductDetail;