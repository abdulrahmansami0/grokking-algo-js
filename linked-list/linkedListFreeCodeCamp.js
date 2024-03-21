class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(100);
const b = new Node(200);
const c = new Node(300);
const d = new Node(400);

a.next = b;
b.next = c;
c.next = d;

const A = new Node(10);
const B = new Node(20);
const C = new Node(30);
const D = new Node(40);
const E = new Node(50);
const F = new Node(60);

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

// A -> B -> C -> D -> NULL

// iteratively
const printLinkedList = (head) => {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

// console.log(printLinkedList(a));

// Recursively
const printLinkedListRecursive = (head) => {
  if (head === null) return;
  console.log(head.val);
  return printLinkedListRecursive(head.next);
};

// printLinkedListRecursive(a);

// Values
const printLinkedListValue = (head) => {
  let current = head;
  let values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

// console.log(printLinkedListValue(a));

// Values Recursive
const printLinkedListValueRecursive = (head, values = []) => {
  if (head === null) return values;
  values.push(head.val);
  return printLinkedListValueRecursive(head.next, values);
};

// console.log(printLinkedListValueRecursive(a, []));

// Max Value
const linkedListMaxValue = (head) => {
  let current = head;
  let max = 0;

  while (current !== null) {
    max = Math.max(max, current.val);
    current = current.next;
  }

  return max;
};

// console.log(linkedListMaxValue(a));

// Sum Value
const sumLinkedListSumValue = (head) => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

// console.log(sumLinkedListSumValue(a));

// Sum Value
const sumLinkedListRecursive = (head) => {
  if (head === null) return 0;
  return head.val + sumLinkedListRecursive(head.next);
};

// console.log(sumLinkedListRecursive(a));

// reverse LinkedList
const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return printLinkedList(prev);
};

// console.log(reverseLinkedList(a));

// reverse LinkedList Recursive
const reverseLinkedListRecursive = (head, prev = null) => {
  if (head === null) {
    return printLinkedListValue(prev);
  }
  const next = head.next;
  head.next = prev;
  prev = head;
  head = next;

  return reverseLinkedListRecursive(head, prev);
};

// console.log(reverseLinkedListRecursive(a));

// zipper LinkedList Recursive
// const zipperLinkedList = (head1, head2) => {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count += 1;
//   }

//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;

//   return printLinkedListValue(tail);
// };

// console.log(zipperLinkedList(a, A));

const removeElement = (head, target) => {
  let dummy = new Node(-1);
  dummy.next = head;
  let current = head;
  let prev = dummy;

  while (current !== null) {
    if (current.val === target) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return printLinkedListValue(dummy.next);
};

console.log(removeElement(a, 200));
