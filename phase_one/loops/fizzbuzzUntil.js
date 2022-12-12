const fizzbuzzUntil = (x) => {
  for (let i = 3 ; i <= x ; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      return 'FizzBuzz';
    } else if (i % 5 === 0) {
      return 'Buzz';
    } else if (i % 3 === 0) {
      return 'Fizz'; 
    } else {
      return i;
    }
  };
};

module.exports = fizzbuzzUntil;