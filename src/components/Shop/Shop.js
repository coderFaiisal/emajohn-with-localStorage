import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { getStoredCart, setToDb } from "../../utilities/databaseManager";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setProducts(fakeData);
  }, []);
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const key in storedCart) {
      const addedProduct = products.find((pd) => pd.key === key);
      if (addedProduct) {
        const quantity = storedCart[key];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleProductCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((pd) => pd.key === selectedProduct.key);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((pd) => pd.key !== selectedProduct.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    setToDb(selectedProduct.key);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleProductCart={handleProductCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
