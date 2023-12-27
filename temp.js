class Money {
  // Определение статического свойства
  static rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };

  // Определение статического метода
  static setRate(from, to, value) {
    this.rates[from][to] = value;
  }
}

// Использование ровно такое же как и в примерах выше
console.log(Money.rates.usd.eur); // 0.7
console.log(Money.setRate('usd', 'eur', 0.8));
console.log(Money.rates.usd.eur); // 0.8
