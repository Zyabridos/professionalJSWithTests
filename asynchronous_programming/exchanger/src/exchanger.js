import fsp from 'fs/promises';

const exchange = async (inputPath1, inputPath2) => {
  const promise1 = fsp.readFile(inputPath1, 'utf-8');
  const promise2 = fsp.readFile(inputPath2, 'utf-8');
  const [data1, data2] = await Promise.all([promise1, promise2]);
  await fsp.writeFile(inputPath1, data2);
  await fsp.writeFile(inputPath2, data1);
};

export default exchange;
