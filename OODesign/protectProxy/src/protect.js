const validateProperty = (prop, protectedProps) => {
  if (protectedProps.includes(prop)) {
    throw new Error(`Access to '${prop}' is restricted`);
  }
};

const protect = (obj, protectedProps) => new Proxy(obj, {
  get(target, prop) {
    validateProperty(prop, protectedProps);
    return target[prop];
  },

  set(target, prop, value) {
    validateProperty(prop, protectedProps);
    target[prop] = value;
    return true;
  },
});

export default protect;

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
console.log(protectedUser.name); // John
console.log(protectedUser.age); // 25
console.log(protectedUser.password); // Error: Access to 'password' is restricted
console.log(protectedUser.country);
