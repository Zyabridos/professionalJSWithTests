import scrabble from '../src/scrabble.js';

it('should work', () => {
  expect(scrabble('rkqodlw', 'world')).toBeTruthy();
  expect(scrabble('avj', 'java')).toBeTruthy();
  expect(scrabble('avjafff', 'java')).toBeTruthy();
  expect(scrabble('', 'hexlet')).toBeFalsy();
  expect(scrabble('scriptingjava', 'JavaScript')).toBeTruthy();
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
