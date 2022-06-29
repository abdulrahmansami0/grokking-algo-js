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

// const are_symmetric = (root1, root2) => {
//   if (!root1 && !root2) return true;
//   else if (!root1 !== !root2 || root1.value !== root2.value) return false;
//   else {
//     return (
//       are_symmetric(root1.left, root2.right) &&
//       are_symmetric(root1.right, root2.left)
//     );
//   }
// };

// const is_symmetric = (root) => {
//   if (!root) {
//     return true;
//   }
//   return are_symmetric(root.left, root.right);
// };

// not sure
const is_symmetric = (root) => {
  if (!root) return true;
  while (root.left && root.right) {
    if (!root.left && !root.right) return true;
    if (!root.left !== !root.right || root.left.value !== root.right.value)
      return false;
    root = root.left;
    root = root.right;
  }
  return root.left === root.right;
};
console.log(is_symmetric(A));

const getAll = (root) => {
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
console.log(getAll(A));
