/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current1 = l1;
  let current2 = l2;
  let head = dummyHead;
  let carry = 0;

  while (current1 !== null || current2 !== null) {
    let sum = carry;
    if (current1 !== null) {
      sum += current1.val;
      current1 = current1.next;
    }
    if (current2 !== null) {
      sum += current2.val;
      current2 = current2.next;
    }
    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);
    head = head.next;
  }

  if (carry > 0) {
    head.next = new ListNode(carry);
  }

  return dummyHead.next;
};
