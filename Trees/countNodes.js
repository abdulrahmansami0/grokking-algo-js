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
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) return [];

  const queue = [root];
  let count = 0;
  let current;
  while (queue.length) {
    current = queue.shift();
    count++;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return count;
};
