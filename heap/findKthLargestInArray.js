// C++ Solution
// class Solution {
//     public:
//         int findKthLargest(vector<int>& nums, int k) {
//             std::priority_queue<int> pq;

//             for (int num : nums) {
//                 pq.push(num);
//             }

//             for (int i = 0; i < k - 1; ++i) {
//                 pq.pop();
//             }

//             return pq.top();
//         }
//     };

// Javascript Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let pq = new priorityQueue();

  for (let i = 0; i < nums.length; ++i) {
    pq.enqueue(nums[i]);
  }

  return pq.getCollection()[pq.size() - k];
};

function priorityQueue() {
  let collection = [];

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
