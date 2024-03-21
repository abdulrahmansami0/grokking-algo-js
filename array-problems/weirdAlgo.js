// time O(n) | space O(n)

const weirdAlgo = (val, arrResult = []) => {
  if (val === 1) {
    arrResult.push(val);
    return arrResult;
  }

  arrResult.push(val);
  if (val % 2 !== 0) {
    return weirdAlgo(val * 3 + 1, arrResult);
  } else {
    return weirdAlgo(val / 2, arrResult);
  }
};

// prompt to male input
const n = parseInt(prompt());

console.log(weirdAlgo(n));
