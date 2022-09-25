/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const a = new Node(1);
const b = new Node(0);
const c = new Node(1);

a.next = b;
b.next = c;

const getDecimalValue = (head) => {
  let sum = "";
  while (head) {
    sum += String(head.value);
    head = head.next;
  }
  return parseInt(sum, 2);
};

console.log(getDecimalValue(a));
