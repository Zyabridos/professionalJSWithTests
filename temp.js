import fsp from 'fs/promises';

import axios from 'axios';

const ls = async (filepath) => {
  const directory = await fsp.readdir(filepath);
};

console.log(await ls('/'));
// [
//   { filepath: '/var/log', mode: 16877 },
//   { filepath: '/var/lock', mode: 17407 },
//   { filepath: '/var/local', mode: 17917 },
// ];

// await ls('/etc/passwd');
// // [{ filepath: '/etc/passwd', mode: 33188 }];

// await ls('../../../../etc/passwd');
// // [{ filepath: '/etc/passwd', mode: 33188 }];
