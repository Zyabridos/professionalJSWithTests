export default class Truncater {
  constructor(options = {}) {
    const defaultOptions = {
      length: 200,
      separator: '...',
    };

    this.options = { ...defaultOptions, ...options };
  }

  truncate(str, length, separator) {
    if (str.length > this.options.length) {
      return str;
    }
    // if (this.options.containNumbers === true && (password.split('').some((current) => validatedSymb.includes(current))) === false) {
    //   errors.containNumbers = 'should contain at least one number';
    // }
  }
}
const truncater = new Truncater();
console.log(truncater.truncate('one two')); // 'one two'
console.log(truncater.truncate('one two', { length: 6, separator: 'xs' })); // 'one tw...'
console.log(truncater.truncate('one two', 5, '..')); // 'one t..'
console.log(truncater.truncate('one two', 9, '//')); // 'one two//.'
console.log(truncater.truncate('one two', 2, 'ss')); // 'onss'
