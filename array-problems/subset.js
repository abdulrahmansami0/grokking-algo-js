// function generateSubsets(nums) {
//   const subsets = [];

//   // Recursive helper function to generate subsets
//   function backtrack(startIndex, currentSubset) {
//     subsets.push([...currentSubset]); // Add a copy of the current subset to the result

//     // Iterate through the elements starting from the startIndex
//     for (let i = startIndex; i < nums.length; i++) {
//       // Include the current element in the subset
//       currentSubset.push(nums[i]);

//       // Recursively generate subsets starting from the next index
//       backtrack(i + 1, currentSubset);

//       // Backtrack: Remove the last element to backtrack and generate other subsets
//       currentSubset.pop();
//     }
//   }

//   backtrack(0, []); // Start with an empty subset at index 0
//   return subsets;
// }

// // Example usage:
// const nums = [1, 2, 3];
// console.log(generateSubsets(nums));

function generateSubsets(nums) {
  const subsets = [[]];

  for (const num of nums) {
    const n = subsets.length;

    for (let i = 0; i < n; i++) {
      const newSubset = subsets[i].concat(num);

      subsets.push(newSubset);
    }
  }

  return subsets;
}

// Example usage:
const nums = [1, 2, 3];
console.log(generateSubsets(nums));
