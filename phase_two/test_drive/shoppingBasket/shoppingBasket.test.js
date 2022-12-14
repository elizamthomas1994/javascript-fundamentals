const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./Candy');

describe('ShoppingBasket', () => {
  it('adds candy to the basket', () =>  {
    let basket = new ShoppingBasket();

    const candy = new Candy('Mars', 4.99);

    basket.addItem(candy);

    expect(basket.candies).toEqual([ {"name": 'Mars', "price": 4.99 } ]);
  });



  it('outputs total price value as 0 if basket is empty', () => {
    let basket = new ShoppingBasket();

    expect(basket.getTotalPrice()).toBe(0);
  });

  it('outputs total price of added candies', () => {
    let basket = new ShoppingBasket();

    const candy = new Candy('Mars', 4.99);

    basket.addItem(candy);
    basket.addItem(candy);
    basket.addItem(candy);
    basket.addItem(candy);

    expect(basket.getTotalPrice()).toBe(19.96);
  });
});