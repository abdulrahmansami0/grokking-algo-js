/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let pq = new priorityQueue();
  let result = [];

  for (let i = 0; i < points.length; ++i) {
    pq.enqueue([points[i], calcDistance(points[i][0], points[i][1])]);
  }

  for (let i = 0; i < k; ++i) {
    result.push(pq.getCollection()[i][0]);
  }

  return result;
};

const calcDistance = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
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
        if (element[1] < collection[i][1]) {
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

  this.getCollection = function () {
    return collection;
  };
}

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// Constraints:

//     1 <= k <= points.length <= 104
//     -104 <= xi, yi <= 104
