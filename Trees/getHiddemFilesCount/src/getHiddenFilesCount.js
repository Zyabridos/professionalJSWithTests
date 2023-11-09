import _ from 'lodash';
import {
  isFile, getName, getChildren,
} from '../../VisualFileSystem/src/index.js';

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  const children = getChildren(tree);
  if (isFile(tree)) {
    return name.startsWith('.') ? 1 : 0;
  }
  const filesCount = children.map(getHiddenFilesCount);
  return _.sum(filesCount);
};

export default getHiddenFilesCount;
