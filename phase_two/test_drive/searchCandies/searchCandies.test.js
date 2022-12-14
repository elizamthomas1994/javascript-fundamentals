const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns values of array that match first two letters', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('filters out results of above test using price property of object', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns values of array that match first letter', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties' , 'Skittles', 'Starburst' ]);
  });

  it('filters out results of above test using price property of object', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});