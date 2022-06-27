const reverseInteger = (num) => {
  let numStr = String(num);
  if (numStr[0] === "-") {
    numStr = numStr.slice(1).split("").reverse().join("");
    return -numStr;
  } else {
    numStr = numStr.split("").reverse().join("");
    return +numStr;
  }
};

console.log(reverseInteger(-934));
