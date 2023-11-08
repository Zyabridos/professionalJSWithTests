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
  numer /= gcd;
  denom /= gcd;
  return { numer, denom };
};

const getNumer = (rationalNum) => {

};
const rat1 = makeRational(3, 9);
console.log(rat1); // 1/3
console.log(getNumer(rat1)); // 1
// console.log(getDenom(rat1)); // 3

// const rat3 = add(rat1, rat2);
// console.log(ratToString(rat3)); // '11/3'

// const rat4 = sub(rat1, rat2);
// console.log(ratToString(rat4)); // '-3/1'
