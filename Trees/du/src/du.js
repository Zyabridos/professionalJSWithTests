import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren, mkdir, mkfile,
} from '../../VisualFileSystem/src/index.js';

const getMetaCount = (node) => {
  const children = getChildren(node);
  const meta = getMeta(node);
  if (isFile(node)) {
    return meta.size;
  }

  const descendantCounts = children.map(getMetaCount);
  return _.sum(descendantCounts);
};

export default (tree) => {
  const children = getChildren(tree);
  const result = children
    .map((child) => [getName(child), getMetaCount(child)]);
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

const tree = mkdir('/', [
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
console.log(getMetaCount(getChildren(tree)[0]));
console.log(du(getChildren(tree)[0]));
console.log(getMetaCount(tree));
console.log(du(tree));
