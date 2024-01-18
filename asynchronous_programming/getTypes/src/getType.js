import * as fs from 'fs';
import fsp from 'fs/promises';

const initPromise = Promise.resolve([]);

// export const reverse = (src) => fsp.readFile(src, 'utf-8')
//   .then((content) => reverseString(content))
//   .then((content) => fsp.writeFile(src, content));

export const getTypes = (filePaths) => filePaths.reduce((acc, path) => {
  const newAcc = acc.then((contents) => fsp.stat(path).then((data) => contents.concat(data)));
  return newAcc;
}, initPromise);

// for (let i = 0; i < pathsToCheck.length; i++) {
//   stat(pathsToCheck[i], (err, stats) => {
//     console.log(stats.isDirectory());
//     console.log(stats);
//   });
// }

// const getTypes = (filePaths) => fsp.stat(filePaths[0]);

getTypes(['./myfile', 'fileCopy']).then(console.log);
// ['file']
