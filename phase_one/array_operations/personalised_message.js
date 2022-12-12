const generateMessages = (array) => {
  array.map((object) => {
    console.log(`Hi ${object.name}! ${object.discount}% off our best candies for you today!`);
  })
};

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

generateMessages(namesAndDiscounts);