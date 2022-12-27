class UserBase {

  constructor(users) {
    this.users = users;
  }
  
  count() {
    return this.users.length;
  }
  
  getNames() {
    return this.users.map((object) => {
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