// @ts-check

import getFunction from '../functions.js';

const buildUser = getFunction();

const expectedDefinedParams = {
  email: 'Zion.Reichel12@yahoo.com',
  firstName: 'Petya',
  lastName: 'Zulauf',
};

const actualDefinedParams = buildUser({
  email: 'Zion.Reichel12@yahoo.com',
  firstName: 'Petya',
  lastName: 'Zulauf',
});

const firstCall = buildUser();
const secondCall = buildUser();

test('buildUser', () => {
  expect(actualDefinedParams).toEqual(expectedDefinedParams);
  expect(firstCall).not.toEqual(secondCall);
});
