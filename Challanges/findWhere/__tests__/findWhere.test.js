import findWhere from '../src/findWhere.js';

it('should wotk', () => {
  expect(findWhere(
    [
      { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
      { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
      { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
      { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
      { title: 'Still foooing', author: 'FooBar', year: 3333 },
      { title: 'Happy Foo', author: 'FooBar', year: 4444 },
    ],
    { author: 'Shakespeare', year: 1611 },
  )).toEqual({ title: 'Cymbeline', author: 'Shakespeare', year: 1611 });
});
