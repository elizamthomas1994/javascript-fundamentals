const checkLength = (phone_number) => {
  if (phone_number.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (phone_numbers) => {
  console.log(phone_numbers.filter(checkLength));
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

filterLongNumbers(numbers);
filterLongNumbers(['4763687363', '7867867862']);
filterLongNumbers([]);
