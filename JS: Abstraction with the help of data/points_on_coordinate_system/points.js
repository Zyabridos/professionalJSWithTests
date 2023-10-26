// Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние
// между двумя точками на плоскости:

const calculateDistance = (point1, point2) => {
  // первый катет
  const base = point2[0] - point1[0];
  // второй катет
  const attitude = point2[1] - point1[1];
  return Math.sqrt(base ** 2 + attitude ** 2);
};

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2)); // 5
