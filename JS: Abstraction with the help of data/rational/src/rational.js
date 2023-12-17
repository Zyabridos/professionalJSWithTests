// Конструктор makeRational() - принимает на вход числитель и знаменатель,
// возвращает дробь в виде объекта.
//  Селектор getNumer() - возвращает числитель
//  Селектор getDenom() - возвращает знаменатель
//  Сложение add() - складывает переданные дроби
//  Вычитание sub() - находит разность между двумя дробями
//  Не забудьте реализовать нормализацию дробей удобным для вас способом.

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
