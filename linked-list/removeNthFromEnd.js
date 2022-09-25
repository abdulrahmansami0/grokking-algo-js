/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const a = new Node(100);
const b = new Node(200);
const c = new Node(300);
const d = new Node(400);
const e = new Node(500);
const f = new Node(600);
const g = new Node(700);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const removeNthFromEnd = (head, n) => {
  if (head === null) return null;
  if (head.next === null) return null;
  let dummy = new Node(-1);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  let listLength = 0;
  let counter = 0;
  while (current.next) {
    listLength++;
    current = current.next;
  }
  current = head;
  while (current) {
    if (counter === listLength - n + 1) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
    counter++;
  }
  return dummy.next;
};

console.log(removeNthFromEnd(a, 2));
