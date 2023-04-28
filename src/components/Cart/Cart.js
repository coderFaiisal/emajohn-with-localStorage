import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const pd of cart) {
    quantity += pd.quantity;
    total += pd.price * pd.quantity;
    shipping += pd.shipping;
  }

  const tax = total * 0.1;

  const grandTotal = total + shipping + tax;

  const toPricition = (num) => {
    const change = parseFloat(num).toFixed(2);
    return change;
  };
  return (
    <div className="cart-area">
      <h2>Shopping Cart : {quantity}</h2>
      <h5>Product Price: {toPricition(total)} </h5>
      <h5>Shipping Cost: {toPricition(shipping)} </h5>
      <h5>Tax + VAT : {toPricition(tax)} </h5>
      <h4>Total : {toPricition(grandTotal)} </h4>
    </div>
  );
};

export default Cart;
