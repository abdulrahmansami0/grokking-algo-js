class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(value, index) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else if (index === 0) {
      this.insertFirst(value);
    } else if (index < 0 && index > this.size) {
      return;
    } else if (index === this.size) {
      this.insertLast(value);
    } else {
        let current = this.head;
        let previous, count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
  }

  getAll() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertLast(200);
list.insertLast(300);
list.insertLast(400);
list.insertLast(500);
list.insertAt(999,3);

list.getAll();
console.log(list);
