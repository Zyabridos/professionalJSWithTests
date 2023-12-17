// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед,
// используя рекурсию.
const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }

  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};
export default reverse;
