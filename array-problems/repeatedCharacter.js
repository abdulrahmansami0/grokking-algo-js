/**
 * @param {string} s
 * @return {character}
 * @return {first repeatedCharacter}
 */
const repeatedCharacter = (s) => {
  let hashMap = {};
  for (let i = 0; i < s.length; ++i) {
    if (!hashMap[s[i]]) {
      hashMap[s[i]] = 1;
    } else {
      hashMap[s[i]]++;
      if (+hashMap[s[i]] === 2) {
        return Object.keys(hashMap).find(
          (key) => hashMap[key] === +hashMap[s[i]]
        );
      }
    }
  }
  return null;
};
console.log(repeatedCharacter("abccbaacz"));

/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter2 = (s) => {
  let map = new Map();
  let stringArr = s.split("");
  for (i = 0; i < stringArr.length; i++) {
    if (map.has(stringArr[i])) {
      return stringArr[i];
    } else {
      map.set(stringArr[i], 1);
    }
  }
  return "";
};

console.log(repeatedCharacter2("abccbaacz"));
