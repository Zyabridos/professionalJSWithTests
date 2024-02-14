import _ from 'lodash';
import {
  mkfile, mkdir, getChildren, getMeta, getName, isDirectory, isFile,
} from '../VisualFileSystem/src/index.js';

// Приведение к нижнему регистру имён директорий и файлов
// внутри конкретной директории

const tree = mkdir('/', [
  mkfile('oNe'),
  mkfile('Two'),
  mkdir('THREE'),
]);

const children = getChildren(tree);
const newChildren = children.map((child) => {
  const name = getName(child);
  const newMeta = _.cloneDeep(getMeta(child));
  if (isDirectory(child)) {
    const children = [...getChildren(child)];
    return mkdir(name.toLowerCase(), children, newMeta);
  }
  return mkfile(name.toLowerCase(), newMeta);
});

// Обязательно копируем метаданные

const newMeta = _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);
console.log(tree2);
