/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (root === null) return [];

  const stack = [root];
  const result = [];
  let set = new Set();
  let current;

  while (stack.length) {
    current = stack.pop();
    result.push(current.val);
    if (set.has(k - current.val)) {
      return true;
    }
    set.add(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};
