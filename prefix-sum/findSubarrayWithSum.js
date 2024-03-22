function findSubarrayWithSum(nums, targetSum) {
  const prefixSum = [0]; // Initialize prefix sum array with 0
  let sum = 0;
  const prefixSums = new Map(); // Store prefix sums along with their indices

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum.push(sum);
    prefixSums.set(sum, i + 1); // Store the sum along with its index (+1 to adjust for 0-based indexing)
  }

  // Iterate through the prefix sums
  for (let i = 0; i < prefixSum.length; i++) {
    const target = prefixSum[i] - targetSum;
    // If the target sum exists in the map and the index of the target sum is less than the current index,
    // it means there exists a subarray with the given sum
    if (prefixSums.has(target) && prefixSums.get(target) < i) {
      const start = prefixSums.get(target);
      const end = i;
      return nums.slice(start, end); // Return the subarray
    }
  }

  return null; // If no subarray found
}

// Example usage:
const nums = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const subarray = findSubarrayWithSum(nums, targetSum);
console.log("Subarray with sum", targetSum, ":", subarray);
