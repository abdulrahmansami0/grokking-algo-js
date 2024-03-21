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
const e = new Node(300);
const f = new Node(600);
const g = new Node(700);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const removeDuplicateElement = (head) => {
  let outerNode = head;
  while (outerNode != null) {
    let innerNode = outerNode;
    while (innerNode != null && innerNode.nextElement != null) {
      if (outerNode.value == innerNode.nextElement.value) {
        innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
      } else {
        innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
      }
    }
    outerNode = outerNode.nextElement;
  }
  return head; // Return the modified linked list itself
};

// console.log(removeDuplicateElement(a));

// 100 -> 200 -> 300 -> 400 -> 300 -> 600 -> 700

const removeDuplicateFromLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    while (current.next !== null && current.value === current.next.value) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head; // Return the modified linked list itself
};

console.log(removeDuplicateFromLinkedList(a));
