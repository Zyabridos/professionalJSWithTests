import ParseError from './ParseError.js';

export default (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ParseError('Invalid JSON string');
  }
};
