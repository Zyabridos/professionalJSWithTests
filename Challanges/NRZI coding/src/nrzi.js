const getFirstSignal = (signal) => {
  let first = '1';
  if (signal.slice(0, 1) === '_') {
    first = '0';
  }
  return first;
};

const nrzi = (signal) => {
  const first = getFirstSignal(signal);
  const array = signal.split('');
  const result = [];
  array.map((current) => {
    if (current === '_') {
      result.push(0);
    }
    if (current === '¯') {
      result.push(1);
    }
  });
  return result.join('');
};

const signal1 = '_|¯|____|¯|__|¯¯¯';
console.log(nrzi(signal1)); // '011000110100'

const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal2)); // '110010000100111'

const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
console.log(nrzi(signal3)); // '010010000100111'

const signal4 = '';
console.log(nrzi(signal4)); // ''

const signal5 = '|';
console.log(nrzi(signal5)); // ''
