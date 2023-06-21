// create an array to represent the shopping cart

let shoppingCart = [];


let addToCart = function (item, quantity) {
    let exisitingItem = shoppingCart.findIndex(cartItem => cartItem.item === item);
    if (exisitingItem) {
        exisitingItem.quantity += quantity;
    } else {
    shoppingCart.push({item, quantity});
    }
}

let removeFromCart = function (item, quantity) {
    let exisitingItem = shoppingCart.findIndex(cartItem => cartItem.item === item);
    if (exisitingItem) {
        if (quantity <= exisitingItem.quantity) {
            exisitingItem.quantity -= quantity;
        } else {
            shoppingCart = shoppingCart.filter(cartItem => cartItem.item === item);
        }
    }
}

let calculateTotal = function () {
    let totalSum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totalSum += shoppingCart[i].item.price * shoppingCart[i].item.quantity
    }
    return totalSum;
}

module.exports = {addToCart, removeFromCart, calculateTotal}