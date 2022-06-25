class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null

const printLinkedList = (head) => {
    let current = head;
    while (current) {
        console.log(current.value);
        current =  current.next;
    }
}

printLinkedList(a);