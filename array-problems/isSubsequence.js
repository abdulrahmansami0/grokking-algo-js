var isSubsequence = (s, t) => {
  if (s.length === 0 && t.length === 0) return true;
  let pointerOne = 0;
  let pointerTwo = 0;
  while (pointerOne <= s.length && pointerTwo <= t.length) {
    if (s[pointerOne] === t[pointerTwo]) {
      pointerOne++;
      pointerTwo++;
    } else {
      pointerTwo++;
    }
    if (pointerOne === s.length && pointerTwo === t.length) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
