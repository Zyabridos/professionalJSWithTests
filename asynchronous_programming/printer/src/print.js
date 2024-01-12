import * as fs from 'fs';

const callback = (_error, data) => console.log(data);

const print = (filepath) => {
  const result = fs.readFile(filepath, 'utf-8', callback);
  return result;
};

export default print;

// export default (filepath) => fs.readFile(
//   filepath,
//   'utf-8',
//   (_error, data) => console.log(data),
// );
