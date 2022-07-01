const toLowerCase = function (s) {
  let ans = "";
  for (let char of s) {
    let n = char.charCodeAt();
    ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : char;
  }
  return ans;
};

toLowerCase("Hello");
