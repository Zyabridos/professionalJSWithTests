import fsp from 'fs/promises';

const initPromise = Promise.resolve([]);

// export const reverse = (src) => fsp.readFile(src, 'utf-8')
//   .then((content) => reverseString(content))
//   .then((content) => fsp.writeFile(src, content));

const getTypes = (paths) => {

};

// const getTypes = (filePaths) => fsp.stat(filePaths[0]);

getTypes(['./myfile']).then(console.log);
// ['file']
