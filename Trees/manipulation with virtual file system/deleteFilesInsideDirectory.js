import _ from 'lodash';
import {
  mkfile, mkdir, getChildren, getMeta, getName, isDirectory,
} from '../VisualFileSystem/src/index.js';

const tree = mkdir('/', [
  mkfile('one'),
  mkfile('two'),
  mkdir('three'),
]);

const children = getChildren(tree);
const newChildren = children.filter(isDirectory);
const newMeta = _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);

console.log(tree2);
