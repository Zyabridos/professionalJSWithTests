import dnaToRna from '../src/dnaToRna.js';

it('should work', () => {
  expect(dnaToRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  expect(dnaToRna('CCGTA')).toEqual('GGCAU');
  expect(dnaToRna('')).toEqual('');
  expect(dnaToRna('ACNTG')).toEqual(null);
});
