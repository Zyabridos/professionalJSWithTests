import fsp from 'fs/promises';

export const reverseString = (data) => data.split('\n').reverse().join('\n');

export const reverse = (src) => fsp.readFile(src, 'utf-8')
  .then((content) => reverseString(content))
  .then((content) => fsp.writeFile(src, content));
