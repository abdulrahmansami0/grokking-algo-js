const isUnique = (str) => {
  const hashUnique = {};
  for (const char of str) {
    if (!hashUnique[char]) {
      hashUnique[char]=1;
    } else {
      hashUnique[char]++;
    }
  }
  let obj = [];
  Object.entries(hashUnique).map(([key, value]) => (
    obj.push([key, value === 1 ? true : false])
  ));

  return obj;
};

console.log(isUnique("abcdee"));