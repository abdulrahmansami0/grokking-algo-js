const isObject = (str) => {
  const hashIsObject = {};
  for (const char of str) {
    if (!hashIsObject[char]) {
      hashIsObject[char] = 1;
    } else {
      hashIsObject[char]++;
    }
  }

  return hashIsObject;
};

const isPermutaion = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    if (str1.length !== str2.length) {
      return false;
    } else {
      const object1 = isObject(str1);
      const object2 = isObject(str2);
      for (const i in object1) {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isPermutaion("abcdee", "abeecd"));
