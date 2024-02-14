// @ts-check
/* eslint-disable prefer-template */

import solution from '../src/solution.js';

describe('solution', () => {
  it('check object', () => {
    expect(typeof solution('some value') === 'object').toBeTruthy();
  });
  it('test1', () => {
    expect(solution(1) + '').toBe('Value is 1');
  });
  it('test2', () => {
    expect(solution(10) + '').toBe('Value is 10');
  });
  it('test3', () => {
    expect(solution('some value') + '').toBe('Value is some value');
  });
});
