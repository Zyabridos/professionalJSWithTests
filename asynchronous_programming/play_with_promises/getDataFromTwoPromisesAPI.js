const beersPromise = fetch('https://api.sampleapis.com/beers/ale');
const winesPromise = fetch('https://api.sampleapis.com/wines/reds');

Promise.all([beersPromise, winesPromise])
.then(data => {
  return Promise.all(data.map(res => res.json()))
}).then(finalData => {
  console.log(finalData)
})