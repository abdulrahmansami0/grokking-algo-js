/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
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

const middleNode = (head) => {
  if (head === null) return null;
  if (head.next === null) return head;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

console.log(middleNode(a));
