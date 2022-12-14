class ShoppingBasket {
  constructor() {
    this.candies = [];
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice;
  }
};

// Export the class
module.exports = ShoppingBasket;