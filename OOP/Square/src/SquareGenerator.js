import Square from './Square.js';

export default class SquaresGenerator {
  static generate(side, amount) {
    return [new Square(side), new Square(side)];
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

console.log(SquaresGenerator.generate(3, 2));
// [new Square(3), new Square(3)]
