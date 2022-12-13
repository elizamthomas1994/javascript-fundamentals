const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns Fizz if divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('returns Buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz if divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('returns given number if not divisible by 3 or 5', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
});