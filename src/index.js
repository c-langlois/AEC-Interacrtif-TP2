import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import ProductList from './ProductsList';
import Cart from './Cart';
import productsData from './Items.json';
import CoffeePage from './CoffeePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App products={productsData} />
);

function App({products}) {
  const [showCoffees, setShowCoffees] = useState(true);

  const toggleCoffees = () => {
    setShowCoffees(!showCoffees);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header cartItems={cartItems} emptyCart={emptyCart} onToggleCoffees={toggleCoffees} showCoffees={showCoffees}/>
      {showCoffees ? <ProductList products={products} OnAddToCart={addToCart} /> : <CoffeePage />}
      {/* <ProductList products={products} OnAddToCart={addToCart} /> */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;