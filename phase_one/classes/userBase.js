class UserBase {

  constructor(array) {
    this.array = array;
  }
  
  count() {
    return this.array.length;
  }
  
  getNames() {
    return this.array.map((object) => {
      return object.name
    });
  }

  getIntroductions() {
    return this.users.map((object) => {
      return `Hi, my name is ${object.name}`;
    });
  }
};

// Export the class
module.exports = UserBase;