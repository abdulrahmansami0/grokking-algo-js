const isObj = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]]++;
    }
  }
  return hash;
};
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let str1 = isObj(s);
  let str2 = isObj(t);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (str1[s[i]] === str2[s[i]]) {
      count++;
    }
  }
  return count === s.length;
};
console.log(isAnagram("anagram", "nagaram"));
