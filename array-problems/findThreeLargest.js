// O(n) time and O(1) space
const findThreeLargestNumbers = (nums) => {
  let threeLargest = [null, null, null];
  for (let i = 0; i < nums.length; i++) {
    updateLargest(threeLargest, nums[i]);
  }
  return threeLargest;
};

const updateLargest = (threeLargest, num) => {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
};

const shiftAndUpdate = (threeLargest, num, index) => {
  for (let i = 0; i < index + 1; i++) {
    if (i === index) {
      threeLargest[i] = num;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, , 541, 8, 7, 7])
);
