import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="border">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
