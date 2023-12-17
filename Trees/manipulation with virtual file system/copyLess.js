import {
  mkfile, mkdir, getChildren, getMeta, getName, isDirectory, isFile,
} from '../VisualFileSystem/src/index.js';

const tree = mkdir('/', [mkfile('hexlet.log')], { hidden: true });
// console.log(tree);
console.log(getName(tree)); // '/'
console.log(getMeta(tree)); // { hidden: true }

console.log('\n***\n');

const [file] = getChildren(tree);
console.log([tree]);
console.log(getName(file)); // hexlet.log
console.log(getMeta(file).unknown); // undefined

console.log('\n***\n');

console.log(isDirectory(tree)); // true
console.log(isFile(tree)); // false
