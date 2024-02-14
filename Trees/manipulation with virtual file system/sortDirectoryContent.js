import {
  mkfile, mkdir, getChildren, getMeta, getName,
} from '../VisualFileSystem/src/index.js';

// Сортировка в обратном порядке

const tree = mkdir('/', [
  mkfile('one'),
  mkfile('two'),
  mkdir('three'),
]);

const children = getChildren(tree);
const newMeta = _.cloneDeep(getMeta(tree));
// reverse изменяет массив, поэтому клонируем
const newChildren = [...children].reverse();
const tree2 = mkdir(getName(tree), newChildren, newMeta);
console.log(tree2);
