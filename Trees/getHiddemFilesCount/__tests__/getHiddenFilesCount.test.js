// @ts-check

import { mkdir, mkfile } from '../../VisualFileSystem/src/index.js';
import getHiddenFilesCount from '../src/getHiddenFilesCount.js';

test('getHiddenFilesCount 1', () => {
  const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('.nginx.conf', { size: 800 }),
      ]),
      mkdir('.consul', [
        mkfile('.config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('.hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

  expect(getHiddenFilesCount(tree)).toEqual(3);
});

test('getHiddenFilesCount 2', () => {
  const tree = mkdir('/', [
    mkdir('.etc', [
      mkdir('.apache'),
      mkdir('nginx', [
        mkfile('.nginx.conf', { size: 800 }),
      ]),
    ]),
    mkdir('.consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('.raft', { size: 80 }),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

  expect(getHiddenFilesCount(tree)).toEqual(2);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
