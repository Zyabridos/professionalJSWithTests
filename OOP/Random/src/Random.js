// static unsigned long int next = 1;

// int rand(void)
// {
//   next = next * 1103515245 + 12345;
//   return (unsigned int)(next/65536) % (RAND_MAX + 1);
// }

// void srand(unsigned int seed)
// {
//   next = seed;
// }

export default class Random {
  constructor(seed) {
    const next = 1103515245 + 12345;
    this.seed = seed;
    const blah = (next / 65536) % (Math.floor(Math.random() * this.seed));
  }

  getNext() {
    return Math.floor(((1103515245 + 12345) / 65536) % (Math.random() * this.seed));
  }

  reset() {
    return this.seed;
  }
}

const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();

console.log(result1);
console.log(result2);
console.log(seq);
console.log(result1 !== result2); // true

seq.reset();

const result21 = seq.getNext();
const result22 = seq.getNext();

console.log(result21);
console.log(result22);

console.log(result1 === result21); // true
console.log(result2 === result22); // true
