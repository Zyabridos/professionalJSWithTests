// @ts-check

import fs from 'fs';
import { jest } from '@jest/globals';
import path from 'path';

test('index', async () => {
  const initHtml = fs.readFileSync(path.join('public', 'index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const spy = jest.spyOn(window.console, 'log');
  await import('../public/index.js');
  const expected = ['First paragraph', 'Second paragraph', 'Third paragraph'];
  expect(spy).toHaveBeenCalledWith(expected);
});
