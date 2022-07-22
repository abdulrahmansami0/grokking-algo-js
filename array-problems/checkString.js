const checkString = (s) => {
  for (let i = 0; i < s.length; ++i) {
    let char1 = s.charCodeAt(i);
    let char2 = s.charCodeAt(i + 1);
    if (char1 > char2) {
      return false;
    }
  }
  return true;
};

console.log(checkString('aaabbb'));