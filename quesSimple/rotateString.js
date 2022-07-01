const rotateString = (str, goal) => {
  let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    let last = arr.pop();
    arr.unshift(last);
    if (arr.join("") === goal) {
      return true;
    }
  }
  return false;
};

console.log(rotateString("abcde", "cdeab"));
