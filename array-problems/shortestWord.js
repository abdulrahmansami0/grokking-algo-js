const shortestWord = (words) => {
  let shortest = "         ";
  shortest.length == Infinity;
  for (const word of words) {
    if (shortest.length > 0 && shortest.length > word.length) {
      shortest = word;
    }
  }
  console.log(shortest);
};

shortestWord(["hello", "haway", "hi", "welcome", "see you"]);
