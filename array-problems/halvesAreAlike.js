/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let a = s.slice(0, s.length / 2);
  let b = s.slice(s.length / 2, s.length);

  let hashMap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < a.length; ++i) {
    if (hashMap[a[i]]) count1++;
    if (hashMap[b[i]]) count2++;
  }

  return count1 === count2;
};

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
