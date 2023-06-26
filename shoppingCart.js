// create an array to represent the shopping cart
// the difficulty in this question is returning the price of items
// 

let shoppingCart = [];


const addToCart = function (item, quantity) {
  let existingItemIndex = shoppingCart.findIndex((cartItem) => cartItem.item === item);

  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity += quantity;
  } else {
    shoppingCart.push({ item, quantity });
  }
};

const removeFromCart = function (item, quantity) {
  let existingItemIndex = shoppingCart.findIndex((cartItem) => cartItem.item === item);

  if (existingItemIndex !== -1) {
    if (quantity < shoppingCart[existingItemIndex].quantity) {
      shoppingCart[existingItemIndex].quantity -= quantity;
    } else {
      shoppingCart.splice(existingItemIndex, 1);
    }
  }
};

const calculateTotal = function () {
  let totalSum = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    const cartItem = shoppingCart[i];
    totalSum += cartItem.item.price * cartItem.quantity;
  }

  return totalSum;
};

module.exports = { addToCart, removeFromCart, calculateTotal };
