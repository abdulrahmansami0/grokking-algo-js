function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.size());
// q.print();

//  Like a hash Map
// function priorityQueue() {
//   let collection = [];

//   this.printCollection = function () {
//     console.log(collection);
//   };

//   this.enqueue = function (element) {
//     if (this.isEmpty()) {
//       collection.push(element);
//     } else {
//       let added = false;
//       for (let i = 0; i < collection.length; i++) {
//         if (element[1] < collection[i][1]) {
//           collection.splice(i, 0, element);
//           added = true;
//           break;
//         }
//       }
//       if (!added) {
//         collection.push(element);
//       }
//     }
//   };

//   this.dequeue = function () {
//     let value = collection.shift();
//     return value[0];
//   };

//   this.front = function () {
//     return collection[0];
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.isEmpty = function () {
//     return collection.length === 0;
//   };
// }

// let pq = new priorityQueue();

// pq.enqueue(["a", 2]);
// pq.enqueue(["b", 3]);
// pq.enqueue(["c", 1]);
// pq.printCollection();

function priorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element < collection[i]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let pq = new priorityQueue();

pq.enqueue(2);
pq.enqueue(1);
pq.enqueue(3);
pq.printCollection();
