import getGcd from './utils.js';

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const add = (rat1, rat2) => {
  const addNumer = (getNumer(rat1) * getDenom(rat2)) + (getNumer(rat2) * getDenom(rat1));
  const addDibider = getDenom(rat1) * getDenom(rat2);
  return makeRational(addNumer, addDibider);
};

const sub = (rat1, rat2) => {
  const subNumer = (getNumer(rat1) * getDenom(rat2)) - (getNumer(rat2) * getDenom(rat1));
  const subDibider = getDenom(rat1) * getDenom(rat2);
  return makeRational(subNumer, subDibider);
};

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
