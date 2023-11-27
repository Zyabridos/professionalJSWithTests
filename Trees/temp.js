import _ from 'lodash';
import {
  isFile, getChildren, isDirectory, getName, mkdir, mkfile,
} from './VisualFileSystem/src/index.js';

const findEmptyDirPaths = (tree) => {
  const ancestry = '';
  // Внутренняя функция, которая может передавать аккумулятор
  // В качестве аккумулятора выступает depth, переменная, содержащая текущую глубину
  const iter = (node, hasItInFileName) => {
    const name = getName(node);
    const children = getChildren(node);

    // Если директория пустая, то добавляем ее в список
    if (isDirectory) {
      if (name.includes(hasItInFileName)) {
        ancestry.push(name);
        return ancestry;
      }
    }

    // Если это второй уровень вложенности, и директория не пустая
    // то не имеет смысла смотреть дальше
    // if (depth === 2) {
    // Почему возвращается именно пустой массив?
    // Потому что снаружи выполняется flat
    // Он раскрывает пустые массивы
    //   return [];
    // }

    // Оставляем только директории
    return children.filter(isFile)
      // Не забываем увеличивать глубину
      .flatMap((child) => iter(child));
  };

  // Начинаем с глубины 0
  return iter(tree, '');
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

console.log(findEmptyDirPaths(tree, '12')); // ['apache', 'data', 'logs']
