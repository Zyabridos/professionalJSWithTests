// @ts-check

import { jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier/standalone';
import htmlParser from 'prettier/plugins/html';

import run from '../src/application.js';

jest.useFakeTimers();

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
  plugins: [htmlParser],
};

const fixuturesPath = '__tests__/__fixtures__';
const getTree = () => prettier.format(document.body.innerHTML, options);

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join(fixuturesPath, 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  run();
});

test('application', async () => {
  expect(await getTree()).toMatchSnapshot();

  const promises = [];
  for (let i = 0; i < 105; i += 1) {
    jest.runOnlyPendingTimers();
    promises.push(getTree());
  }
  await Promise.all(promises)
    .then((results) => results.forEach((result) => expect(result).toMatchSnapshot()));
});
