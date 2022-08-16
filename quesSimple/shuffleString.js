const restoreString = (s, indices) => {
  let newStr = "";
  for (let i = 0; i < indices.length; ++i) {
    for (let j = 0; j < indices.length; ++j) {
      if (indices[j] === i) {
        newStr += s[j];
      }
    }
  }
  return newStr;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
