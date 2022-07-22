var isSubsequence = function (s, t) {
  let obj = {};
  let flag = true;
  for (let i = 0; i < t.length; ++i) {
    if (!obj[t[i]]) {
      obj[t[i]] = 1;
    } else {
      obj[t[i]]++;
    }
  }
  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]]) {
      flag = flag & true;
    } else {
      flag = flag & false;
    }
  }
  return flag;
};

console.log(isSubsequence(s, t));
