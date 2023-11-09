import _ from 'lodash';
import {
  isFile, getChildren, isDirectory, getName, mkdir, mkfile,
} from './VisualFileSystem/src/index.js';

const getFilesCount = (node) => {
  if (isFile(node)) {
    return 1;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesCount);
  return _.sum(descendantCounts);
};

const getSubdirectoriesInfo = (tree) => {
  const children = getChildren(tree);
  const result = children
    // Нас интересуют только директории
    .filter(isDirectory)
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), getFilesCount(child)]);

  return result;
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

console.log(getSubdirectoriesInfo(tree));
// => [['etc', 1], ['consul', 2]]
