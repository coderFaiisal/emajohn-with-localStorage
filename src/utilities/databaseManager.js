const getStoredCart = () => {
  let shoppingCart = {};
  const savedCart = localStorage.getItem("shopping-cart");
  if (savedCart) {
    shoppingCart = JSON.parse(savedCart);
  }
  return shoppingCart;
};

const setToDb = (id) => {
  let shoppingCart = getStoredCart();
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const deleteFromDb = (id) => {
  let shoppingCart = getStoredCart();
  if (shoppingCart[id]) {
    delete shoppingCart[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export { getStoredCart, setToDb, deleteFromDb };
