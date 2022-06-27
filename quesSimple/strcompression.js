const strCompression = (str) => {
  let count = 1;
  let output = "";
  let uniqCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      output += str[i] + count;
      count = 1;
      uniqCount++;
    }
  }
  if (uniqCount === str.length) return str;
  else return output;
};

console.log(strCompression("aabbcccffghh"));