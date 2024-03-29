// @ts-check

import fsp from 'fs/promises';
import path from 'path';
import { reverse, reverseLines } from '../src/reverse.js';

test('reverse 1', async () => {
  const exampleFilePath = path.resolve(process.cwd(), '__fixtures__/example');
  const content = await fsp.readFile(exampleFilePath, 'utf-8');
  const filepath = '/tmp/example';
  await fsp.writeFile(filepath, content);

  const expected = reverseLines(content);

  await expect(reverse(filepath)).resolves.not.toThrow();
  await expect(fsp.readFile(filepath, 'utf-8')).resolves.toEqual(expected);
});
