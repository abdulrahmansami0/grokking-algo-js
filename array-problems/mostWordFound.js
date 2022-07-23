const mostWordsFound = (sentences) => {
  let maxWord = 0;
  let sen;
  for (let i = 0; i < sentences.length; ++i) {
    sen = sentences[i];
    if (sen.split(" ").length > maxWord) {
      maxWord = sen.split(" ").length;
    }
  }
  return maxWord;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
