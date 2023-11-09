// added — ключ отсутствовал в первом объекте, но был добавлен во второй
// deleted — ключ был в первом объекте, но отсутствует во втором
// changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
// unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями

import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const mergedObject = Object.assign(obj1, obj2);
  const result = {};
  const entriesObj1 = Object.entries(obj1);
  const keysObj1 = Object.keys(obj1);
  const entriesObj2 = Object.entries(obj2);
  const keysObj2 = Object.keys(obj2);
  return _.pick(obj1, keysObj1);
};

console.log(genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
));

console.log(genDiff(
  { a: 'a', b: 'b', c: 'c' },
  { a: 'aa', d: 'dd' },
));

// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }
