const merge = (...data) => {
  const result = {};
  const uniqueKeys = data
    .map((current) => Object.keys(current)).flat()
    .filter((current, index, array) => array.indexOf(current) === index);
  return Object.groupBy({ a } => a)
};

export default (data) => data
  .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
  .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
  .map(({ city, country }) => [country, city])
  .sort()
  .reduce((acc, [country, city]) => {
    const citiesAcc = acc[country] ?? [];
    const cities = citiesAcc.concat(city);
    const uniqueCities = new Set(cities);
    return { ...acc, [country]: [...uniqueCities] };
  }, {});

console.log(merge({}, {}, {}));
// {}

console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

console.log(merge(
  { a: 1, b: 2, c: 3 },
  {},
  { a: 3, b: 2, d: 5 },
  { a: 6 },
  { b: 4, c: 3, d: 2 },
  { e: 9 },
));
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
