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
const e = new Node(400);

const g = new Node(888);
const h = new Node(999);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

g.next = h;

// A -> B -> C -> D -> E -> null

// const printLinkedList = (head) => {
//   let current = head;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

const printLinkedList = (head) => {
  if (!head) return;
  console.log(head.value);
  printLinkedList(head.next);
};

printLinkedList(a);

// const linkedListValues = (head) => {
//   let result = [];
//   let current = head;
//   while (current) {
//     result.push(current.value);
//     current = current.next;
//   }
//   return result;
// };

// let solve by recursion
const linkedListValues = (head, result = []) => {
  let current = head;
  result.push(current.value);
  if (current.next) return linkedListValues(current.next, result);
  return result;
};

console.log(linkedListValues(a));

// const sumList = (head) => {
//   if (!head) return 0;
//   let current = head;
//   let sumLinks = 0;
//   while (current) {
//     sumLinks += current.value;
//     current = current.next
//   }
//   return sumLinks;
// }

// recursive
const sumList = (head, sum = 0) => {
  if (!head) return 0;
  sum += head.value;
  if (head.next) return sumList(head.next, sum);
  return sum;
};

console.log(sumList(a));

// const linkedListFind = (head, target) => {
//   let current = head;
//   while (current) {
//     if (current.value === target) {
//       return true;
//     } else {
//       current = current.next;
//     }
//   }
//   return false;
// };

const linkedListFind = (head, target) => {
  if (!head) return false;
  if (head.value === target) return true;
  return linkedListFind(head.next, target);
};

console.log(linkedListFind(a, 200));

// const getNodeValue = (head, index) => {
//   let current = head;
//   let count = 0;
//   while (current) {
//     if(count === index) return current.value;
//     current = current.next;
//     count++;
//   }
// };

const getNodeValue = (head, index) => {
  if (!head) return false;
  if (index === 0) return head.value;
  return getNodeValue(head.next, index - 1);
};

console.log(getNodeValue(a, 2));

// const reverseLinkedList = (head) => {
//   let current = head;
//   let previous = null;
//   while(current){
//     let next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// }

// const reverseLinkedList = (head, previous = null) => {
//   if (!head) return previous;
//   let current = head;
//   let next = current.next;
//   current.next = previous;
//   return reverseLinkedList(next, current);
// };

// console.log(reverseLinkedList(a));

// const zipperList = (head1, head2) => {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while (current1 && current2) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (current1) tail.next * current1;
//   if (current2) tail.next * current2;

//   return tail;
// };

// console.log(zipperList(a, g));

// delete duplicate
const deleteDuplicates = (head) => {
  let current = head;
  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

console.log(deleteDuplicates(a));

// remove element
const removeElements = (head, val) => {
  let dummy = new Node(-1);
  dummy.next = head;
  let current = head;
  let prev = dummy;
  while (current) {
    if (current.value === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};

console.log(removeElements(a, 300));

const printLinkedList2 = (head) => {
  if (!head) return;
  console.log(head.value);
  printLinkedList(head.next);
};

printLinkedList2(a);
