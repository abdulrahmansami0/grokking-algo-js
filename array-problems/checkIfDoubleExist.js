/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (i !== j && arr[i] === 2 * arr[j]) {
        return true;
      }
    }
  }

  return false;
};

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
