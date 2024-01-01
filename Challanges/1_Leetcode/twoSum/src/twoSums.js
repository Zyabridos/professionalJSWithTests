const twoSums = (inputArray, target) => {
  for (let i = 0, j = 1; i, j <= inputArray.length; j += 1) {
    if (inputArray[i] + inputArray[j] === target) {
      return [i, j];
    }
    i += 1;
  }
  return 'Such combination does not exists in this array';
};

export default twoSums;
