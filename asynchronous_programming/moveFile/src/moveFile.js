import * as fs from 'fs';

const write = (filepath, content, cb) => {
  fs.writeFile(filepath, content, (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};

const getFileData = (filepath, cb) => fs.readFile(filepath, 'utf-8', (error1, data) => {
  if (error1) {
    console.log('error in first file');
  }
  cb(null, data.toString());
});

getFileData('./myfile', (err, data) => {});

// const move = (pathFrom, pathTo, cb) => {
//   getFileData(pathFrom, (err1, data) => {
//     if (err1) {
//       console.log('error in second file');
//       return;
//     }
//     cb(null, data);
//   });
//   fs.writeFile('./fileCopy', 'utf-8', (error2, data2) => {
//     if (error2) {
//       console.log('error in second file');
//       return;
//     }
//     fs.writeFile('./new-file', `${data1}${data2}`, (error3) => {
//       if (error3) {
//         console.log('error during writing');
//         return;
//       }
//       console.log('finished!');
//     });
//   });
// };

// move('/opt/myfile', '/tmp/newfile', (error) => {
//   if (error) {
//     console.log('oops');
//     return;
//   }
//   console.log('yes!');
// });
