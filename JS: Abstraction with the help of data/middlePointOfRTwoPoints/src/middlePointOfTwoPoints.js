// Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине
// между двумя указанными точками.

// Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
const getMidpoint = (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;
  return { x, y };
};

export default getMidpoint;
