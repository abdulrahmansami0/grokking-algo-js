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
var goodNodes = function (root) {
  function dfs(root, max) {
    if (!root) return 0;

    let result;
    if (root.val >= max) {
      result = 1;
    } else {
      result = 0;
    }
    max = Math.max(max, root.val);
    result += dfs(root.left, max);
    result += dfs(root.right, max);
    return result;
  }

  return dfs(root, root.val);
};
