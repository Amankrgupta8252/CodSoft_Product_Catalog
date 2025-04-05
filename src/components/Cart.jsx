import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty.</h2>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
