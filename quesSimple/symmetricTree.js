class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("B");
const D = new Node("C");
const E = new Node("C");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = D;
C.right = E;

const are_symmetric = (root1, root2) => {
  if (!root1 && !root2) return true;
  else if (!root1 !== !root2 || root1.value !== root2.value) return false;
  else {
    return (
      are_symmetric(root1.left, root2.right) &&
      are_symmetric(root1.right, root2.left)
    );
  }
};

const is_symmetric = (root) => {
  if (!root) {
    return true;
  }
  return are_symmetric(root.left, root.right);
};

console.log(is_symmetric(A));
