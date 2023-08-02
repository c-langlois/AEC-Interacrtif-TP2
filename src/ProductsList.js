import React, { useEffect, useState } from 'react';
import Products from "./Products";
import ProductCategories from './ProductCategories';
import ProductColors from './ProductColors';


const ProductList = ({OnAddToCart}) => {
  
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedColor, setSelectedColor] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');
    const [loading, setLoading] = useState(true);

    function getProducts() {
        fetch("https://insta-api-api.0vxq7h.easypanel.host/products")
        .then(response => response.json())
        .then(response => {
            setLoading(false);
            setProducts(response);
        });
    }
    useEffect(() => {
        getProducts();
    }, [])

    const filteredProducts = products.filter(product => {

      let categoryMatch = product.category?.name === selectedCategory;
      let colorMatch = product.color.name === selectedColor;
      let priceMatch = true;
  
      if (selectedCategory === 'All') {
        categoryMatch = true;
      }
  
      if (selectedColor === 'All') {
        colorMatch = true;
      }

      if (selectedPrice === "0-9") {
        priceMatch = product.price >= 0 && product.price <= 999;
      } else if (selectedPrice === "10-99") {
        priceMatch = product.price >= 1000 && product.price <= 9999;
      } else if (selectedPrice === "100+") {
        priceMatch = product.price >= 10000;
      } 

      return categoryMatch && colorMatch && priceMatch;
    });

  return (
    <div className="product-list">
       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Catégories</option>
          <ProductCategories/>
       </select>

       <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="All">Couleurs</option>
          <ProductColors/>
       </select>

      <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
        <option value="All">Prix</option>
        <option value="0-9">0-9</option>
        <option value="10-99">10-99</option>
        <option value="100+">100 et plus</option>
      </select>

      <button className="reset-button" onClick={() => {
        setSelectedCategory('All');
        setSelectedColor('All');
        setSelectedPrice('All');
      }}>Réinitialiser</button>

      <div className="row">
        {loading ? 
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
          </div> : null}
        {filteredProducts.map((product) => (
          <Products
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price/100}
            image={product.image}
            category={product.category?.name}
            color={product.color.name}
            onAddToCart={() =>
              OnAddToCart(product)
            }
          />
        ))}
      </div>
    </div>

  );
};

export default ProductList;

