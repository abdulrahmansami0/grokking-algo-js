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
var diameterOfBinaryTree = function (root) {
  let result = 0;

  function dfs(root) {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return result;
};
