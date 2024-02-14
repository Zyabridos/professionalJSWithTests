import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren,
} from '../VisualFileSystem/src/index.js';

const getNodesCount = (tree) => {
  if (isFile(tree)) {
    return 1;
  }
  const children = getChildren(tree);
  const descendantCounts = children.map(getNodesCount);
  return 1 + _.sum(descendantCounts);
};

const example = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

console.log(getNodesCount(example)); // 8
