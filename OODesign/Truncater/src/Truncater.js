export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(options = {}) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  truncate(text, options = {}) {
    const { length, separator } = { ...this.options, ...options };
    return (text.length <= length) ? text : text.substring(0, length).concat(separator);
  }
}

// const truncater = new Truncater({ length: 6 });
// console.log(truncater.truncate('one two', { separator: '.' })); // 'one tw.'
// console.log(truncater.truncate('one two', { length: 3 })); // 'one...'
