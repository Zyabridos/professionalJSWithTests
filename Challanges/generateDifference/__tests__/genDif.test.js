it('should work', () => {
  expect(genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
  )).toEqual(
    {
      one: 'deleted',
      two: 'changed',
      four: 'unchanged',
      zero: 'added',
    },
  );
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
