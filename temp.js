const group = {
  names: ['Ivan', 'Igor'],
  newName: 'Andrey',
  changeNames() {
    return this.names.map(() => this.newName);
  },
};

console.log(group.changeNames());

const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];

const printer = {
  items: objects,
  print() {
    const current = this.items;
    current.name.forEach(() => console.log(this.items));
    // this.items.name.forEach(() => this.name.split('').reverse().join(''));
  },
};

printer.print(); // [1]

// each(objects, function callback() {
//   this.name = this.name.split('').reverse().join('');
// });
