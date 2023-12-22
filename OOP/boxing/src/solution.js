// const number = new Number(100);
// number.valueOf = () => 99999;

// const newName = `${number + 0} is a big number`; // "99999 is a big number!"

const solution = (value) => {
  const obj = {
    sayHello: () => value,
  };
  return obj;
};

console.log(`${solution(1)}`); // 'Value is 1'
console.log(`${solution(10)}`); // 'Value is 10'
console.log(`${solution('some value')}`); // 'Value is some value'
