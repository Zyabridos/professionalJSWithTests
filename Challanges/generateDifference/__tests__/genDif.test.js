import genDiff from '../src/genDif.js';

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
