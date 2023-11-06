import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getName, getChildren, getMeta,
} from '../../VisualFileSystem/src/index.js';

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  const newTree = mkdir(name, newChildren, newMeta);
  return newTree;
};

export default downcaseFileNames;

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx', [], { size: 4000 }),
    mkdir('CONSUL', [
      mkfile('config.JSON', { uid: 0 }),
    ]),
  ]),
  mkfile('hOsts'),
]);

console.log(JSON.stringify(downcaseFileNames(tree)));
console.log(downcaseFileNames(tree));
