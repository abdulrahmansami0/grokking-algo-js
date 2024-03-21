/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let hashSet = new Set();
  while (headA) {
    hashSet.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (hashSet.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
