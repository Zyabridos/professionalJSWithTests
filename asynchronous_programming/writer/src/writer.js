import * as fs from 'fs';

const write = (filepath, content, cb) => {
  fs.writeFile(filepath, content, (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};

// write('./myfile', 'input data', () => {
//   console.log('success');
// });

export default write;
