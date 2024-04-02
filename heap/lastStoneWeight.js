/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let pq = new priorityQueue();

  for (let i = 0; i < stones.length; ++i) {
    pq.enqueue(stones[i]);
  }

  while (pq.size() > 1) {
    let y = pq.front();
    pq.dequeue();
    let x = pq.front();
    pq.dequeue();
    if (y === x) {
      continue;
    } else {
      pq.enqueue(y - x);
    }
  }

  return pq.front() ?? 0;
};

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
        if (element > collection[i]) {
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

  this.back = function () {
    return collection[collection.length - 1];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:

// Input: stones = [1]
// Output: 1

// Constraints:

//     1 <= stones.length <= 30
//     1 <= stones[i] <= 1000
