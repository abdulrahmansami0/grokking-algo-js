// O(n) time & O(n) space
// const twosum = (arr, target) => {
//   let numberHash = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (numberHash.has(target - arr[i])) {
//       return [i, numberHash.get(target - arr[i])];
//     } else {
//       numberHash.set(arr[i], i);
//     }
//   }
// };
// console.log(twosum([3, 6, 4, 7, 1, 9], 11));

// O(nlog(n)) time & O(1) space
const twosum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let currentSum;
  while (left < right) {
    currentSum = arr[left] + arr[right];
    if (currentSum === target) return [arr[left], arr[right]];
    else if (currentSum < target) left++;
    else if (currentSum > target) right--;
  }
  return [];
};

console.log(twosum([3, 6, 4, 7, 1, 9], 11));
