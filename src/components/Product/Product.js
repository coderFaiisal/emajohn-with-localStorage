import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, stock } = props.product;
  return (
    <div className="product-card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Only {stock} left in stock. Order soon...</p>
        <h4>Price: ${price}</h4>
        <button
          onClick={() => props.handleProductCart(props.product)}
          className="card-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
