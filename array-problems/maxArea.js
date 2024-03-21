/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let diff = height.length - 1;
  let max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      max = Math.max(max, height[left] * diff);
      left++;
      diff--;
    } else if (height[left] > height[right]) {
      max = Math.max(max, height[right] * diff);
      right--;
      diff--;
    } else {
      max = Math.max(max, height[right] * diff);
      left++;
      diff--;
    }
  }

  return max;
};
