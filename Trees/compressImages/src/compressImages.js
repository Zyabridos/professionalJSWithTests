// Реализуйте и экспортируйте функцию compressImages(),
// которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их.
// Под сжиманием понимается уменьшение свойства size в метаданных в два раза.
// Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными,
// которые были внутри этой директории.

// Картинками считаются все файлы заканчивающиеся на .jpg.

import _ from 'lodash';
import { mkfile, mkdir } from '../../VisualFileSystem/src/index.js';

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

export default compressImages;
