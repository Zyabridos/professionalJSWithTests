import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (dirPath, cb) => {
  // читаем содержимое переданной папки dirPath
  // readdir принимает вторым аргументом колбэк с двумя аргументами
  // второй аргумент колбэка, fileNames, - это массив имен файлов и папок
  fs.readdir(dirPath, (error1, fileNames) => {
    // первым делом обрабатываем ошибку - передаем ошибку в колбэк cb,
    // опуская 2-й аргумент, хотя допустимо туда явно передавать null,
    // а из самой функции выходим через return
    if (error1) {
      cb(error1);
      return;
    }
    // если ошибки нет - работаем
    // собираем путь к каждому файлу, синхронная функция
    const filePaths = fileNames.map((name) => path.join(dirPath, name));
    // теперь извлекаем информацию о каждом файле/папке
    // при помощи асинхронной функции fs.stat
    // она тоже принимает вторым аргументом колбэк с двумя аргументами
    async.map(filePaths, fs.stat, (error2, stats) => {
      // точно так же обрабатываем ошибку
      if (error2) {
        cb(error2);
        return;
      }
      // если ошибок нет, мы работаем с массивом stats -
      // результатом применения fs.stat к каждому элементу массива filePaths
      // в _.sumBy() передаем массив отфильтрованных файлов первым аргументом,
      // ведь поддиректории мы тут не учитываем,
      // а вторым - имя свойства, по которому осуществляем сложение,
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      // передаем результат во второй параметр колбэка
      cb(null, sum);
    });
  });
};

export default getDirectorySize;
