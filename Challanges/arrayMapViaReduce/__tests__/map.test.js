const array1 = [1, 4, 9, 16];

describe('test of .map function, that was written via reduce', () => {
  it('should work', () => {
    expect(array1.map((x) => x * 2)).toEqual([2, 8, 18, 32]);
  });
});
