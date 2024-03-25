// @ts-check

import { mkdir, mkfile, getChildren } from '../../VisualFileSystem/src/index.js';
import du from '../src/du.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

test('du', () => {
  expect(du(tree)).toEqual([
    ['etc', 10280],
    ['hosts', 3500],
    ['resolve', 1000],
  ]);

  expect(du(getChildren(tree)[0])).toEqual([
    ['consul', 9480],
    ['nginx', 800],
    ['apache', 0],
  ]);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
