const { addToCart, removeFromCart, calculateTotal } = require('./shoppingCart');

describe('addToCart', () => {
  beforeEach(() => {
    shoppingCart = []; // Clear the shopping cart before each test
  });

  test('should add an item to the shopping cart', () => {
    addToCart('item1', 1);
    expect(shoppingCart).toHaveLength(1);
    expect(shoppingCart[0]).toEqual({ item: 'item1', quantity: 1 });
  });

  test('should increment the quantity when adding an existing item', () => {
    addToCart('item1', 1);
    addToCart('item1', 2);
    expect(shoppingCart).toHaveLength(1);
    expect(shoppingCart[0]).toEqual({ item: 'item1', quantity: 3 });
  });
});

describe('removeFromCart', () => {
  beforeEach(() => {
    shoppingCart = [
      { item: 'item1', quantity: 3 },
      { item: 'item2', quantity: 2 },
    ]; // Initialize the shopping cart with some items
  });

  test('should remove a specified quantity of an item from the shopping cart', () => {
    removeFromCart('item1', 2);
    expect(shoppingCart).toHaveLength(2);
    expect(shoppingCart[0]).toEqual({ item: 'item1', quantity: 1 });
  });

  test('should remove the item from the shopping cart if the quantity is zero or less', () => {
    removeFromCart('item1', 3);
    expect(shoppingCart).toHaveLength(1);
    expect(shoppingCart[0]).toEqual({ item: 'item2', quantity: 2 });
  });

  test('should not modify the shopping cart if the item is not found', () => {
    removeFromCart('item3', 1);
    expect(shoppingCart).toHaveLength(2);
  });
});


