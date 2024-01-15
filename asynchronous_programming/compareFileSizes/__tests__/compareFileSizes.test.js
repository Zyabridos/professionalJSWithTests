import compareFileSizes from '../src/compareFileSizes.js';

test('compareFileSizes 1', () => {
  const filepath = './testFile1.txt';
  return new Promise((resolve) => {
    compareFileSizes(filepath, filepath, (_error1, result) => {
      expect(result).toBe(0);
      resolve(0);
    });
  });
});

test('compareFileSizes 2', () => {
  const filepath1 = './testFile2.txt';
  const filepath2 = './testFile1.txt';
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(1);
      resolve();
    });
  });
});

test('compareFileSizes 3', () => {
  const filepath1 = './testFile1.txt';
  const filepath2 = './testFile2.txt';
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(-1);
      resolve();
    });
  });
});
