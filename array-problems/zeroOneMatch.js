const zeroOneMatch = (pattern, source) => {
  if (pattern.length > source.length) return 0;
  const hashMap = {
    a: true,
    i: true,
    y: true,
    o: true,
    e: true,
  };
  let condition = pattern.length;
  let match = 0;
  for (let i = 0; i < source.length - pattern.length; i++) {
    let counter = 0;
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === "0" && hashMap[source[i + j]]) {
        counter++;
      } else if (pattern[j] === "1" && !hashMap[source[i + j]]) {
        counter++;
      }
    }
    if (condition === counter) {
      match++;
    }
  }
  return match;
};

console.log(zeroOneMatch("010", "amazing"));
