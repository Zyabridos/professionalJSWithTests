/* eslint-disable @typescript-eslint/naming-convention */

import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';
import getFunction from '../functions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toHtmlList = getFunction();

// BEGIN (write your solution here)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

const formats = ['csv', 'json', 'yml'];

let expected;

beforeAll(async () => {
  expected = await readFile('result.html');
});

test.each(formats)('%s', async (format) => {
  const filePath = getFixturePath(`list.${format}`);
  const actual = await toHtmlList(filePath);
  expect(actual).toEqual(expected.trim());
});

// END
