import calculateDistance from '../points.js';

test('calculateDistance', () => {
  const point1 = [0, 0];
  const point2 = [3, 4];
  expect(calculateDistance(point1, point2)).toStrictEqual(5);
});

test('calculateDistance2', () => {
  const point1 = [0, 0];
  const point2 = [0, 0];
  expect(calculateDistance(point1, point2)).toStrictEqual(0);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
