import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Products</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
