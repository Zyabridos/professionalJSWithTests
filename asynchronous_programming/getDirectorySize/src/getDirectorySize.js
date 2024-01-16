// import path from 'path';
import * as fs from 'fs';
import _ from 'lodash';
import async from 'async';

function getFileSizeInBytes(file, callback) {
  fs.stat(file, (err, stat) => {
    if (err) {
      return callback(err);
    }
    callback(null, stat.size);
  });
}

function isFile(file, callback) {
  fs.stat(file, (err, stat) => {
    if (err) {
      return callback(err);
    }
    callback(null, stat.isFile());
  });
}

const state = {
  count: 0,
  filesNames: [],
};

// fs.readFile('./second', 'utf-8', (_error2, data2) => {
//   state.count += 1;
//   state.results[1] = data2;
// });

const getDirectorySize = (path, cb) => {
  // fs.stat(path, (_error1, file) => {
  //   state.count += 1;
  //   state.filesNames.push(file);
  // });

  // const pathsToCheck = state.filesNames;

  // for (let i = 0; i < pathsToCheck.length; i += 1) {
  //   fs.stat(pathsToCheck[i], (err, stats) => {
  //     if (stats.isFile() === false) {
  //       stats.pop(pathsToCheck[i]);
  //     }
  //     console.log(state);
  //   });
  // }
  fs.readdir(path, (error1, file) => {
    async.map(file, isFile, (err, res) => {
      // res.pop(isFile === false);
      console.log(res);
      if (error1) { console.log(error1); } else {
        async.map(file, getFileSizeInBytes, (error2, sizes) => {
          if (error2) {
            console.log(error2);
          } else {
            console.log(_.sumBy(sizes));
          }
        });
      }
    });
  });
};

getDirectorySize('./', (err, size) => {
  console.log(size);
});
