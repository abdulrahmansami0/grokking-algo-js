const Urlify = (str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(Urlify("mr jhon smith ", 13));