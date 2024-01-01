// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
// состоящий из массивов-пар и возвращает объект, полученный из этих пар.

// Примечания
// Если при конструировании объекта попадаются совпадающие ключи,
// то берётся значение из последнего массива-пары:

export default (array) => {
  const reformattedArray = array.map(([key, value]) => ({ [key]: value }));
  const flatteredOnject = {};
  for (let i = 0; i < reformattedArray.length; i += 1) {
    Object.assign(flatteredOnject, reformattedArray[i]);
  }
  return flatteredOnject;
};
