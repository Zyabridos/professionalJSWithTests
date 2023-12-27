export default class Square {
  constructor(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }
}

const square = new Square(10);
console.log(square.getSide()); // 10
