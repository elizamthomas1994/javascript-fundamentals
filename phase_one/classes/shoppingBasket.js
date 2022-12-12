class ShoppingBasket {

  constructor() {
    this.array = array;
  }
  
  addItem(candy) {
    return this.array.concat(candy);
  }
  
  getTotalPrice() {
    total_price = 0
    this.array.map((object) => {
      total_price += object.price;
    })

    return total_price;
  }
};

// Export the class
module.exports = ShoppingBasket;