export default (objects, callback) => objects.forEach((object) => callback.call(object));
