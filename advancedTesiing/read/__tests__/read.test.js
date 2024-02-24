// @ts-check

import getFunction from '../functions.js';

const read = getFunction();

test('boom!', () => {
  expect(() => {
    read('/undefined');
  }).toThrow();
  expect(() => {
    read('/etc');
  }).toThrow();
});
