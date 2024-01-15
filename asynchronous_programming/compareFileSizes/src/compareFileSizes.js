import * as fs from 'fs';
import path from 'path';

const getFileSize = (filepath, cb) => {
  fs.stat(filepath, (_error, stat) => {
    cb(null, stat);
    console.log(stat);
  });
};

const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, data1) => {
    // console.log(data1.size);
    fs.stat(filepath2, (_error2, data2) => {
      console.log(`${data1}${data2}`);
    });
  });
};

compareFileSizes('__fixtures__/file1.txt', '__fixtures__/file2.txt', (_err, result) => console.log(result));
// getFileSize(('__fixtures__/file1.txt', (_err, result) => console.log(result)));
getFileSize('__fixtures__/file1.txt', (null, result)) => console.log(result);
