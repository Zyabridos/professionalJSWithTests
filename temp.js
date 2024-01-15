import * as fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
};

unionFiles('./myfile', './fileCopy', './unitedFile.txt', (err, data) => {
  // Любые ошибки чтения файла: доступ, отсутствие файла, директория вместо файла
  // null неявно приводится к false, поэтому достаточно такой проверки,
  // любой другой ответ трактуется как true
  if (err) {
    console.log('error!');
    return; // guard expression
  }

  console.log('finished!');
});
