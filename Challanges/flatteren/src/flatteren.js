// Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.

const flatteren = (array) => {
  const result = array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return acc.concat(flatteren(current));
    }
    return acc.concat(current);
  }, []);
  return result;
};

export default flatteren;
