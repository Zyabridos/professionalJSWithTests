import getBadLinks from '../checker.js';

test('/', async () => {
  const url = 'http://localhost:8080';
  const links = await getBadLinks(url);
  const expected = [
    'http://localhost:8080/second',
  ];
  expect(links.sort()).toEqual(expected.sort());
});

test('/first', async () => {
  expect(getBadLinks().toEqual(200))
  const url = 'http://localhost:8080/first';
  const links = await getBadLinks(url);
  const expected = [
    'http://localhost:8080/pages/products',
    'http://localhost:8080/pages/reports',
    'http://localhost:8080/pages/users',
  ];
  expect(links.sort()).toEqual(expected.sort());
});
