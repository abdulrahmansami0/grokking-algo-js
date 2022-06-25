const sum = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++)
    if (max < arr[i])
        max = arr[i];
  return max;
};
console.log(sum([4, 2, 7, 4, 6, 3, 2, 5]));
