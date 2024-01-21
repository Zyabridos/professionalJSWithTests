import fsp from 'fs/promises';

const initPromise = Promise.resolve([]);

const unionFiles = (inputPath1, inputPath2, outputPath) => {
  const result = fsp.readFile(inputPath1, 'utf-8')
    .then((data1) => {
      const promise = fsp.readFile(inputPath2, 'utf-8')
        .then((data2) => fsp.writeFile(outputPath, `${data1}${data2}`));
    });
  return result;
};
const getTypes = (filepaths) => {

};

// const getTypes = (filePaths) => fsp.stat(filePaths[0]);

console.log(getTypes(['./']));
// ['file']
