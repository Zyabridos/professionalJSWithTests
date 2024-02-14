const make = (numer, denom) => ({ numer, denom });

const numer = (rational) => rational.numer;
const denom = (rational) => rational.denom;

const toString = (rational) => `${numer(rational)} / ${denom(rational)}`;

const add = (rat1, rat2) => {
  const addNumer = (numer(rat1) * denom(rat2)) + (numer(rat2) * denom(rat1));
  const addDibider = denom(rat1) * denom(rat2);
  return make(addNumer, addDibider);
};

const sub = (rat1, rat2) => {
  const subNumer = (numer(rat1) * denom(rat2)) - (numer(rat2) * denom(rat1));
  const subDivider = denom(rat1) * denom(rat2);
  return make(subNumer, subDivider);
};

const mul = (rat1, rat2) => {
  const mulNumer = numer(rat1) * numer(rat2);
  const mulDivider = denom(rat1) * denom(rat2);
  return make(mulNumer, mulDivider);
};

const div = (rat1, rat2) => {
  const divNumer = numer(rat1) * denom(rat2);
  const divDivider = denom(rat1) * numer(rat2);
  return make(divNumer, divDivider);
};

const isEqual = (rat1, rat2) => {
  const equalNumer = numer(rat1) * denom(rat2);
  const equalDivider = numer(rat2) * denom(rat1);
  return equalNumer === equalDivider;
};

export {
  make, numer, denom, toString, add, isEqual, sub, mul, div,
};
