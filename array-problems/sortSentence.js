const sortSentence = (s) => {
  s = s.split(" ");
  let r = s.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  for (let i = 0; i < r.length; ++i) {
    r[i] = r[i].slice(0, r[i].length - 1);
  }
  return r.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
