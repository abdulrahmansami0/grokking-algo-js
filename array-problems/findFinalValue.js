const findFinalValue = (nums, original) => {
  nums.sort((a, b) => a - b);
  let numberOriginal = original;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === numberOriginal) {
      numberOriginal = nums[i] * 2;
    }
  }
  return numberOriginal;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
