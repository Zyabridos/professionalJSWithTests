import * as fs from 'fs';

const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.stat(filepath2, (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      cb(null, Math.sign(data1.size - data2.size));
    });
  });
};

export default compareFileSizes;
