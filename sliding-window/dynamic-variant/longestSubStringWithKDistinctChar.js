const longestSubStringWithKDistinctChar = (s, k) => {
  let windowStart = 0;
  let windowEnd = 0;
  let maxLength = 0;
  let map = new Map();

  while (windowEnd < s.length) {
    const rightChar = s[windowEnd];
    map.set(rightChar, (map.get(rightChar) || 0) + 1);

    while (map.size > k) {
      const leftChar = s[windowStart];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    windowEnd++;
  }

  return maxLength;
};

console.log(longestSubStringWithKDistinctChar("araaci", 2));
console.log(longestSubStringWithKDistinctChar("araaci", 1));
console.log(longestSubStringWithKDistinctChar("cbbebi", 3));
