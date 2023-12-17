import findIndexOfNearest from '../src/findIndexOfNearest.js';

it('should work', () => {
  expect(findIndexOfNearest([], 2)).toBeNull;
  expect(findIndexOfNearest([15, 10, 3, 4], 0)).toBe(2);
  expect(findIndexOfNearest([7, 5, 3, 2], 4)).toBe(1);
  expect(findIndexOfNearest([7, 5, 4, 4, 3], 4)).toBe(2);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
