export default (str) => {
  const myArray = str.split('');
  const result = [];
  myArray.map((current) => {
    switch (current) {
      case 'A':
        result.push('U');
        break;
      case 'C':
        result.push('G');
        break;
      case 'G':
        result.push('C');
        break;
      case 'T':
        result.push('A');
        break;
      default:
        return 'null';
    }
  });
  if (myArray.length !== result.length) {
    return null;
  }
  return result.join('');
};
