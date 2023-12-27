import ParseError from './ParseError.js';

function parseJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.log(e);
  }
}

const json = '{ "key": "value" }';
console.log(parseJson(json)); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
console.log(parseJson(incorrectJson)); // => ParseError: Invalid JSON string

console.log(JSON.parse('{"p": 5}', (k, v) => {
  if (k === '') {
    return v;
  } // самое верхнее значение - возвращаем его
  return v * 2; // иначе возвращаем v * 2.
})); // { p: 10 }

console.log(JSON.parse('{"p": 5}', (k, v) => {
  if (k === '') {
    return v;
  } // самое верхнее значение - возвращаем его
  return v * 2; // иначе возвращаем v * 2.
})); // { p: 10 }
