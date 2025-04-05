import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>

      <div className="container mx-auto p-4">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </>
  );
};

export default CartPage;
