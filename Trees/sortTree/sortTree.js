const src = [3, 1, 8, 1, 2, 5, 13];

const makeTree = (data) => {
  const tree = [, data[0]];

  const iter = (value, tree) => {
    const node = [, value];
    if (value <= tree[1]) {
      if (tree[0]) {
        return iter(value, tree[0]);
      }
      tree[0] = node;
    } else {
      if (tree[2]) {
        return iter(value, tree[2]);
      }
      tree[2] = node;
    }
    return tree;
  };

  const newData = data.slice(1);

  newData.map((el) => {
    iter(el, tree);
  });
  return tree;
};

const res = makeTree(src);
console.log(res);

const balancedTree = [
  [
    [undefined, 1, undefined],
    1,
    [, 2],
  ],
  3,
  [
    [, 5],
    8,
    [, 13],
  ],
];

const imbalancedTree = [
  [
    [
      [, 1],
      1,
      [, 2],
    ],
    3,
    [, 5],
  ],
  8,
  [, 13],
];

const postOrder = (node) => {
  if (!node) {
    return;
  }
  const [left, value, right] = node;
  postOrder(left);
  postOrder(right);
  console.log(value);
};

const preOrder = (node) => {
  if (!node) {
    return;
  }
  const [left, value, right] = node;
  console.log(value);
  preOrder(left);
  preOrder(right);
};

const inorder = (node) => {
  if (!node) {
    return;
  }
  const [left, value, right] = node;
  inorder(left);
  console.log(value);
  inorder(right);
};

const sum = (node) => {
  if (!node) {
    return 0;
  }
  const [left, value, right] = node;
  return sum(left) + value + sum(right);
};

const printPath = (node, path = '') => {
  if (!node) {
    return;
  }
  const [left, value, right] = node;
  const currentPath = `${path}/${value}`;
  printPath(left, currentPath);
  console.log(currentPath);
  printPath(right, currentPath);
};

const findDepth = (node, d = 0) => {
  if (!node) {
    return d;
  }
  const [left, value, right] = node;
  const ld = findDepth(left, d + 1);
  const rd = findDepth(right, d + 1);
  return Math.max(ld, rd);
};

const bft = (root) => {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    const [left, value, right] = node;
    console.log(value);
    if (left) {
      queue.push(left);
    }
    if (right) {
      queue.push(right);
    }
  }
};

console.log(printPath(imbalancedTree));
// console.log(inorder(balancedTree))

/* const t = [
  [
    [, 2],
    7,
    [
      [, 5],
      6,
      [, 11],
    ]
  ],
  1,
  [
    ,
    9,
    [
      [, 5],
      9
    ]
  ],
]
*/
