/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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
const d = new Node(300);
const e = new Node(200);
const f = new Node(100);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reversedList = (head) => {
  let current = head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const isPalindrome = (head) => {
  let slow = head;
  let fast = head;
  let reversedPointer = head;
  let listLength = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    listLength++;
  }

  let mid = reversedList(slow);
  while (listLength) {
    listLength--;
    if (reversedPointer.value !== mid.value) return false;
    reversedPointer = reversedPointer.next;
    mid = mid.next;
  }
  return true;
};

console.log(isPalindrome(a));
