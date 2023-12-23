class Cart { // имя класса - это имя функции конструктора
  // Метод с именем constructor соответствует функции-конструктору
  // Он вызывается, когда мы делаем new Company(name, email)
  addItem(item, count) {
    this.item = item;
    this.count = count;
  }

  // Это свойство getName с записанной в него обычной (function) функцией
  // getName() {
  //   return this.name;
  // }

  // getEmail() {
  //   return this.email;
  // }

  // setEmail(email) {
  //   this.email = email;
  // }
}

const cart = new Cart();
console.log(cart);
console.log(cart.addItem({ name: 'car', price: 3 }, 5));
// // console.log(cart.addItem({ name: 'house', price: 10 }, 2));
// console.log(cart.getItems().length); // 2
// console.log(cart.getCost()); // 35
// console.log(cart.getItems());
// [
//   { item: { name: 'car', price: 3 }, count: 5 },
//   { item: { name: 'house', price: 10 }, count: 2 },
// ]
