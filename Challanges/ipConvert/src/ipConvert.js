export const ipToInt = (str) => {
  const temp = str.split('.');
  const array = temp.map((current) => parseInt(current, 10));
  const power = [256 ** 3, 256 ** 2, 256 ** 1, 256 ** 0];
  return array
    .map((current, index) => power[index] * current)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
};

export const intToIp = (num) => {
  let d = num % 256;
  for (let i = 3; i > 0; i -= 1) {
    num = Math.floor(num / 256);
    d = `${num % 256}.${d}`;
  }
  return d;
};
