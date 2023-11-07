// разделить число на каждыое число массива
// отфильтровать или заредьюсить наименьшнн

export default (array, num) => {
  const substracted = array.map((current) => current - num);
  const abs = substracted.map((current) => Math.abs(current));
  if (abs.indexOf(Math.min(...abs)) < 0) { return null; }
  return abs.indexOf(Math.min(...abs));
};
