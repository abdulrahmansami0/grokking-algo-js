const validateSunbequense = (array, subsequense) => {
  let arrayIndex = 0;
  let subIndex = 0;
  while (arrayIndex < array.length && subIndex < subsequense.length) {
    if (array[arrayIndex] === subsequense[subIndex]) {
      subIndex++;
    }
    arrayIndex++;
  }
  return (subIndex === subsequense.length);
};
console.log(
  validateSunbequense([5, 1, 22, 25, 6, -1, 8, 10, 11, 23], [1, 6, -1, 10])
);
