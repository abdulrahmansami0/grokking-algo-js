/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const stack = [];
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }

  return result;
};

// // Time O(N^2) | Space O(1)
// var dailyTemperatures = function (temperatures) {
//   let answer = [];
//   for (let i = 0; i < temperatures.length; ++i) {
//     let count = 0;
//     let visited = false;
//     for (let j = i; j < temperatures.length; ++j) {
//       if (temperatures[i] < temperatures[j]) {
//         answer.push(count);
//         visited = true;
//         break;
//       }
//       count++;
//     }
//     if (!visited) {
//       answer.push(0);
//     }
//   }

//   return answer;
// };
