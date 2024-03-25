const validatedSymb = ['0', '1', '2', '3', '4', '5', '6', '7', '9'];
export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};
    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }
    if (this.options.containNumbers === true && (password.split('').some((current) => validatedSymb.includes(current))) === false) {
      errors.containNumbers = 'should contain at least one number';
    }

    return errors;
  }
}

// const validator = new PasswordValidator({ containNumbers: false, minLength: 6 });
// console.log(validator.validate('qwertyui1')); // {}
// console.log(validator.validate('qwertyui1')); // {}
// console.log(validator.validate('qwerty'));
// console.log(validator.validate(''));
