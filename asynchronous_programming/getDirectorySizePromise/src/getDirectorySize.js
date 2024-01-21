import fsp from 'fs/promises';
import path from 'path';

import _ from 'lodash';

// export const getDirectorySize = async (dirPath) => {
//   const result = [];

//   const files = await fsp.readdir(dirPath);
//   const filePaths = files.map((name) => path.join(dirPath, name));
//   for (const file of filePaths) {
//     if ((await fsp.stat(file)).isFile()) {
//       result.push(((await fsp.stat(file)).size));
//     }
//   }
//   return _.sumBy(result);
// };

const getDirectorySize = (dirpath) => {
  // читаем список имен файлов в папке
  const promise = fsp.readdir(dirpath).then((filenames) => {
    // строим путь к файлам
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    // извлекаем метаданные о файлах
    const promises = filepaths.map((filePath) => fsp.stat(filePath));
    // превращаем массив промисов (promises) в один-единственный промис,
    // возвращающий массив
    return Promise.all(promises);
  });

  // из промиса получаем массив stats
  // суммируем размеры файлов в директории
  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};

export default getDirectorySize;
