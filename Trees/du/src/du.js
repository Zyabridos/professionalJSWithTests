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
