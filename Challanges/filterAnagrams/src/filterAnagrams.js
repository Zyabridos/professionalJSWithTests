const isAnagram = (word1, word2) => word1.split('').sort().join('') === word2.split('').sort().join('');

export default (word, words) => words
  .filter((current) => (isAnagram(current, word)));
