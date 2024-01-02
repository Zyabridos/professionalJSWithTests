const normalize = (coll) => {
  const uniqCountries = Array.from(new Set(coll
    .map((current) => current.country.toLowerCase().trim())));
  const normalizedColl = coll.map((obj) => {
    const tempObj = {};
    for (const key in obj) {
      tempObj[key] = obj[key].toLowerCase().trim();
    }
    return tempObj;
  });
  const russianCities = [];
  const americanCities = [];
  normalizedColl.map((current) => {
    if (current.country === uniqCountries[1]) {
      russianCities.push(current.name);
    }
    if (current.country === uniqCountries[0]) {
      americanCities.push(current.name);
    }
  });
  // return { russia: russianCities, usa: americanCities };
  const values = normalizedColl.map((current) => Object.values(current)).flat();
  return new Set(values);
};

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
