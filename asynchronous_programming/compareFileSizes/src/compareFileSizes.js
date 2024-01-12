import * as fs from 'fs';
import path from 'path';

const getFileOwners = (dirpath, cb) => {
  fs.readdir(dirpath, (_error1, filenames) => {
    const readFileStat = (items, result = []) => {
      // if (items.length === 0) {
      //   // Обработку ошибок пока не рассматриваем
      //   cb(null, result);
      //   return;
      // }
      const [first, ...rest] = items;
      const filepath = path.join(dirpath, first);
      fs.stat(filepath, (_error2, stat) => {
        readFileStat(rest, [...result, { filename: first, size: stat.size }]);
      });
    };
    readFileStat(filenames);
  });
};

const write = (filepath, content, cb) => {
  fs.writeFile(filepath, content, (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};

const getFileSize = (filepath, cb) => {
  fs.stat(filepath, (_error, stat) => {
    cb(null, stat.size);
  });
};

const compareFileSizes = (filepath1, filepath2, cb) => {
  const file1Size = fs.stat(filepath1, (_error1, stat) => {
    // console.log(stat.size);
  });
  const file2Size = fs.stat(filepath2, (_error2, stat) => {
    // console.log(stat.size);
  });
  const result = Math.sign(file1Size - file2Size);
};

// const pathsToCheck = ['./testFile1.txt', './testFile1.txt'];
const file1 = './myfile';
const file2 = './temp.js';

// compareFileSizes(file1, file2);

// compareFileSizes(file2, file1, (_err, result) => console.log(result));

// write('./myfile', 'input data', () => {
//   console.log('success');
// });

getFileSize(file1, (_err, res) => {
  console.log(res);
});

getFileSize(file2, (_err, res) => res);

// const cdgetFileSize = (filepath, cb) => {
//   fs.stat(filepath, (_error, stat) => {
//     cb(null, stat.size);
//   });
// };

const compare = (filepath1, filepath2, cb) => {
  cb(null, Math.sign(
    (getFileSize(filepath1, (_err, res) => res)) - (getFileSize(filepath2, (_err, res) => res)),
  ));
};

compare(file1, file2, (_err, result) => console.log(result));
