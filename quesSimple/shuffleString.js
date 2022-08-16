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
