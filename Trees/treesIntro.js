class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

const depthFirstValues = (root) => {
  const result = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();

    result.push(current.value);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return result;
};
console.log(depthFirstValues(A));

const breadthFirstSearch = (root) => {
  if (root === null) return [];

  const queue = [root];
  const result = [];
  let current;
  while (queue.length) {
    current = queue.shift();
    result.push(current);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
};

console.log(breadthFirstSearch(A));

// const treeInclude = (root, target) => {
//   if (!root) return false;
//   const queue = [root];
//   let current;
//   while (queue.length) {
//     current = queue.shift();
//     if (current.value === target) return true;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
// };

// recursive
const treeInclude = (root, target) => {
  if (!root) return false;
  if (root.value === target) return true;
  return treeInclude(root.left, target) || treeInclude(root.right, target);
};

console.log(treeInclude(A, "E"));

// const treeSum = (root) => {
//   if (root === null) return 0;
//   return root.value + treeSum(root.left) + treeSum(root.right);
// };

// do this iteratively
const treeSum = (root) => {
  if (root === null) return 0;

  let totalSum = 0;
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    totalSum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return totalSum;
};

console.log(treeSum(A));

// const treeMinValue = (root) => {
//   let smallest = Infinity;
//   const stack = [root];
//   while (stack.length) {
//     const current = stack.pop();

//     if (current.value < smallest) smallest = current.value;
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return smallest;
// };

// recursive version
const treeMinValue = (root) => {
  if (!root) return Infinity;
  const leftMin = treeMinValue(root.left);
  const rightMin = treeMinValue(root.right);
  return Math.min(root.value, leftMin, rightMin);
};

console.log(treeMinValue(A));

// recursively
const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left) return root.value;
  if (!root.right) return root.value;
  const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.value + maxChildPathSum;
}; 

console.log(maxPathSum(A));
