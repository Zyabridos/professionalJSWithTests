const changeClass = (node, oldValue, newValue) => {
  const result = {};
  const keys = Object.keys(node);
  for (const key of keys) {
    if (node.className === oldValue) {
      result[key] = newValue;
    } else if (typeof node.children === 'array') {
      result[key] = changeClass(node[key], className, newValue);
    }
    // else {
  //     result[key] = node[key];
  //   }
  }
  return result;
};

export default changeClass;

const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'old-class',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};

console.log(changeClass(tree, 'old-class', 'new-class'));
console.log(tree.className);
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
