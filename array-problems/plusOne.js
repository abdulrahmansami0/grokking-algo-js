var plusOne = (digits) => {
  const strToNumber = BigInt(digits.join(""));
  const newNum = strToNumber + 1n;
  const numberToStr = String(newNum);
  return numberToStr.split("");
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
