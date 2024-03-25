// берем первый элемент, и проходимся по массиву
// если нашла еще один такой же, то возвращаем его индекс

const getLongestLength = (str) => {
  const array = str.split('');

  return array.map((current, index) => {
    if (current === array[0]) {
      return index;
    }
  });
};

console.log(getLongestLength('abcdeef')); // 5
console.log(getLongestLength('jabjcdel')); // 7
console.log(getLongestLength('')); // 0
