import React, { useState, useEffect } from 'react';
import Cart from './Cart';

function Header({onPageChange, currentPage, cartLength }) {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand d-flex align-items-center">
        <button className="btn-transparent" onClick={() => onPageChange("products")} disabled={currentPage === "products"}>
          <img src="/images/3Diamonds.svg" alt="Ma Boutique"  style={{ width: '275px',height :'200px' }}/>
        </button>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
      <h1 className="text-center">SM La précieuse</h1>
      </div>
      <div>
        <button className="btn btn-info" onClick={() => onPageChange("products")} disabled={currentPage === "products"}>
          Afficher la boutique
        </button>
        <button className="btn btn-info" onClick={() => onPageChange("coffee")} disabled={currentPage === "coffee"}>
          Afficher les cafés
        </button>
        <button className="btn btn-info" onClick={() => onPageChange("cart")} disabled={currentPage === "cart"}>
          Panier ({cartLength})
        </button>
      </div>
    </header>
  );
}

export default Header;