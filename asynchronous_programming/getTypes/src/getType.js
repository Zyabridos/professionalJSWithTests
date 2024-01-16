import fsp from 'fs/promises';

const getTypes = (filePaths) => {
  const initPromise = Promise.resolve([]);

  const promise = filePaths.reduce((acc, path) => {
    const newAcc = acc.then((contents) => fsp.readFile(path, 'utf-8').then((data) => contents.concat(data)));
    return newAcc;
  }, initPromise);
  return promise;
};

const filepaths = ['/myfile'];
const promises = filepaths.map((filepath) => fsp.readFile(filepath, 'utf-8'));
const promise = Promise.all(promises);

promise.then((contents) => contents.map(console.log));

// console.log(getTypes(['./myfile']));
// // ['directory', 'file', null]
