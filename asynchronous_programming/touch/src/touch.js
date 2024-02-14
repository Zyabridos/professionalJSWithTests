import fsp from 'fs/promises';

const touch = (filepath) => fsp.access(filepath)
  .catch(() => fsp.writeFile(filepath, ''));

export default touch;
