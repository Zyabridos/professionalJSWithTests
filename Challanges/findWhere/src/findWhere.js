const findWhere = (array, searchedItem) => {
  const arrayEntries = Object.entries(array);
  const searchedEntries = Object.entries(searchedItem);
  // return arrayEntries;
  return searchedEntries[0][0];
  // return array.map((current) => current.title);
};

console.log(findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 },
)); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }

export default findWhere;
