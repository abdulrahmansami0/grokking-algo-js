const charMap = (str) => {
  let hashUnique = {};
  for (const char of str) {
    if (!hashUnique[char]) {
      hashUnique[char] = 1;
    } else {
      hashUnique[char]++;
    }
  }
  return hashUnique;
};

const oneWay = (str1, str2) => {
  if (str1 === str2) return false;
  const object1 = charMap(str1);
  const object2 = charMap(str2);

  let counter = 0;
  for (const i in object1) {
    if (object1[i] !== object2[i]) counter++;
    else if (counter > 2) return false;
  }
  return true;
};

console.log(oneWay("peie", "pie"));
