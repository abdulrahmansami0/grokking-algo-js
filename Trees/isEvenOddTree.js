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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  if (!root) return [];

  let queue = [root];
  let evenLevel = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let prevNode = null;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (!isValidLevel(evenLevel, currentNode.val, prevNode)) return false;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      prevNode = currentNode.val;
    }

    evenLevel++;
  }

  return true;
};

const isValidLevel = (evenLevel, val, prevNode) => {
  if (evenLevel % 2 === 0 && val % 2 === 1 && (!prevNode || prevNode < val))
    return true;
  else if (
    evenLevel % 2 === 1 &&
    val % 2 === 0 &&
    (!prevNode || prevNode > val)
  )
    return true;
  else return false;
};
