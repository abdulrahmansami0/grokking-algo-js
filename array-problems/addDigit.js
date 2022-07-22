var addDigits = (num) => {
  let digit = [];
  digit = String(num).split("");
  while (digit.length > 1) {
    let numSum = digit.reduce((total, num) => {
      return +total + Math.round(num);
    }, 0);

    digit = String(numSum).split("");
  }

  return +digit[0];
};

console.log(addDigits(38));
