import Square from './Square.js';

class SquaresGenerator {
  constructor(side, amount = 5) {
    this.side = side;
    this.amount = amount;
  }

  getSide() {
    return this.side;
  }

  // exchangeTo(newCurrency) {
  //   if (this.currency === newCurrency) {
  //     return new Money(this.value, this.currency);
  //   }
  //   // this.constructor.rates находится в функции-конструкторе
  //   const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
  //   return new Money(newValue, newCurrency);
  // }

  generate(side, amount) {
    // this.amount = amount;
    // if (this.amount === 5) {
    //   return new Square(this.side);
    // }
    return this.side;
  }
}

// Money.rates = {
//   usd: {
//     eur: 0.7,
//   },
//   eur: {
//     usd: 1.2,
//   },
// };

const squares = SquaresGenerator.generate(3, 5);
console.log(SquaresGenerator.generate(3, 5));
// [new Square(3), new Square(3)]
