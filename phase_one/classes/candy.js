class Candy {

  // A constructor, to give initial arguments.
  constructor(name, price) {
    // We can define attributes stored on the instance with `this`
    this.name = name;
    this.price = price;
  }

  // A method.
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

// Export the class
module.exports = Candy;