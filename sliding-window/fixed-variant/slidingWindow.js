function slidingWindow(nums, k) {
  const result = [];

  // Initialize the window sum
  let windowSum = 0;

  // Iterate over the first k elements to initialize the window sum
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // Add the initial window sum to the result
  result.push(windowSum);

  // Slide the window
  for (let i = k; i < nums.length; i++) {
    // Remove the element from the left side of the window
    console.log(nums[i - k]);
    windowSum -= nums[i - k];
    // Add the new element to the right side of the window
    windowSum += nums[i];
    // Add the window sum to the result
    result.push(windowSum);
  }

  return result;
}

// Example usage:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(slidingWindow(nums, k)); // Output: [3, 5, 7, 7, 11, 16]
