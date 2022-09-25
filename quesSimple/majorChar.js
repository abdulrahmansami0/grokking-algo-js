const majorChar = (str) => {
  let hashChar = {};
  let majorCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (!hashChar[str[i]]) {
      hashChar[str[i]] = [true, majorCount];
    } else {
      let oldCount = hashChar[str[i]][1];
      hashChar[str[i]] = [true, oldCount + 1];
    }
  }
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
      if (max < hashChar[str[i]][1]) {
        max = hashChar[str[i]][1];
        maxChar = str[i];
      }
  }

  return [maxChar, max];
};

console.log(majorChar("helloddde"));
