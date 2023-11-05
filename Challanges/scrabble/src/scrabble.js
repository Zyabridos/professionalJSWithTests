export default (letters, word) => {
  const wordToLowercase = word.toLowerCase();
  const intersection = (([...wordToLowercase].filter((x) => [...letters].includes(x))));
  return intersection.join('') === wordToLowercase;
};
