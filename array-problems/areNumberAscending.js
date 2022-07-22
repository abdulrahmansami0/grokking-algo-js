const areNumbersAscending = (s) => {
  let matches = s.match(/(\d+)/g);

  for (let i = 0; i < matches.length; ++i) {
    if (+matches[i] >= +matches[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
