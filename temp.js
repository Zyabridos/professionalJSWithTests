class Collection {
  constructor(coll) {
    this.coll = coll;
  }

  map(fn) {
    const newColl = this.coll.map((element) => fn(element));

    return new Collection(newColl);
  }

  filter(fn) {
    const newColl = this.coll.filter((element) => fn(element));

    return new Collection(newColl);
  }

  // Возвращает саму коллекцию, а не this.
  // Этот метод всегда последний в цепочке вызовов Collection.
  all() {
    return this.coll;
  }
}

const objects = new Collection([
  { name: 'Karl' },
  { name: 'Mia' },
]);

console.log(objects.map((current) => current.name.split('').reverse().join('')));
// function each(coll, callback) {

// }

// const objects = [
//   { name: 'Karl' },
//   { name: 'Mia' },
// ];
// each(objects, function callback() {
//   this.name = this.name.split('').reverse().join('');
// });

// console.log(objects);
// // [
// //   { name: 'lraK' },
// //   { name: 'aiM' },
// // ];
