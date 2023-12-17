import twoSums from '../src/twoSums.js';

describe('twoSums', () => {
  it('should work', () => {
    expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSums([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSums([3, 3], 6)).toEqual([0, 1]);
  });
  it('should work with wrong data', () => {
    expect(twoSums([1, 4], 9)).toEqual('Such combination does not exists in this array');
    expect(twoSums([], 9)).toEqual('Such combination does not exists in this array');
  });
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
