const write = (filepath, content, cb) => {
  fs.writeFile(filepath, content, (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};

const printer = {
  items: [1],
  print() { // важно что внешняя функция имеет контекст
    // Стрелочная функция определяется внутри функции print,
    // но вызывается внутри метода forEach
    this.items.forEach(() => console.log(this.items));
  },
};

function each(obj, cb) {
  iter(obj, (err, data) => {
    cb(null, data);
  });
  // return this.obj.forEach(cb);
}

printer.print(); // [1]

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];

// each(objects, function callback() {
//   this.name = this.name.split('').reverse().join('');
// });

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];
