// @ts-check

import path from 'path';
import fs from 'fs';
import getDirectorySize from '../src/getDirectorySize.js';

const getPath = (dirPath) => path.join('__fixtures__', dirPath);

test('getDirectorySize1', () => (
  new Promise((done) => {
    const dirPath = getPath('/opt');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    getDirectorySize(dirPath, (err, size) => {
      expect(err).toBeNull();
      expect(size).toBe(0);
      done();
    });
  })
));

test('getDirectorySize2', () => (
  new Promise((done) => {
    const dirPath = getPath('/usr/local/bin');
    getDirectorySize(dirPath, (err, size) => {
      expect(err).toBeNull();
      expect(size).toBe(224);
      done();
    });
  })
));
