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

const deleteMiddle = (head) => {
  if (!head) return null;
  if (head.next === null) return null;
  let current = head;
  let prev = null;
  let listLength = 0;
  let counter = 0;
  while (current.next) {
    listLength++;
    current = current.next;
  }
  current = head;
  while (current) {
    if (counter === Math.ceil(listLength / 2)) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
    counter++;
  }
  return head;
};

console.log(deleteMiddle(a));

const deleteMiddle2 = (head) => {
  if (head === null || head.next === null) return null;
  let fast = head;
  let slow = head;
  let prev = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  prev.next = slow.next;
  slow.next = null;
  slow = prev;

  return head;
};

console.log(deleteMiddle2(a));
