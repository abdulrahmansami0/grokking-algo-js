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
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  if (!root) return 0;

  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let currentLevel = [];
    let levelSize = queue.length;

    let sum = 0;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    for (let i = 0; i < currentLevel.length; i++) {
      sum += currentLevel[i];
    }

    result.push(sum);
    sum = 0;
  }

  result.sort((a, b) => b - a);

  if (result.slice(k - 1, k).length > 0) {
    return result.slice(k - 1, k)[0];
  }
  return -1;
};
