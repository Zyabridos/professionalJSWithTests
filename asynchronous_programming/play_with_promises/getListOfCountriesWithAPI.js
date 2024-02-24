// console.log('Start');
// const list = fetch('https://sampleapis.com/api-list/countries');
// console.log('We got it!');
// console.log('countries >', list);

// const listPromise = fetch('https://api.sampleapis.com/countries/countries');
// listPromise.then(data =>{
//   console.log(data);
// });

// const listPromise = fetch('https://api.sampleapis.com/countries/countries');
// listPromise
// .then(data => data.json())
// .then(countries => {
//   console.log(countries);
// });

const listPromise = fetch('https://api.sampleapis.com/countries/countries');
listPromise
.then(data => data.json())
.then(countries => countries)
.catch(error => {
  console.log('Error ', error);
})
