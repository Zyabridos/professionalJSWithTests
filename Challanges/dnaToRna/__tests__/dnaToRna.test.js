const dnaToRna = (str) => {
  const array = [];
  for (let i = 0; i < str.length; i += 1) {
    array.push(str.charAt(i));
  }
  const mappedArray = array.map((letter) => `${letter}a`);
  return mappedArray;
};

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
// console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
