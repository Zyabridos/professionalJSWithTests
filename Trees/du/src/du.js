import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren, mkdir, mkfile, isDirectory,
} from '../../VisualFileSystem/src/index.js';

const compressImages = (tree) => {
  const clone = _.cloneDeep(tree);
  const { children } = clone;
  const images = children.filter((files) => files.name.includes('.jpg'));
  const halfSized = images.map((sizes) => sizes.meta.size / 2);
  for (let i = 0; i < images.length; i += 1) {
    images[i].meta.size = halfSized[i];
  }
  return clone;
};
const getSize = (tree) => {
  const clone = _.cloneDeep(tree);
  const { children } = clone;
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  const sum = children.reduce((acc, current) => acc + current.size, 0);
  return newMeta;
};

const getFilesCount = (node) => {
  if (isFile(node)) {
    return 1;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesCount);
  return _.sum(descendantCounts);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children
    // Нас интересуют только директории
    .filter(isDirectory)
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), getFilesCount(child)]);

  return result;
};

const example = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log(getSize(example));
// console.log(du(example));
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
