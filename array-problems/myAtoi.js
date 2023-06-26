/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let parsed = parseInt(s, 10);

  if (isNaN(parsed)) {
    return 0;
  } else if (parsed >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else if (parsed <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else {
    return parsed;
  }
};

let s = "   -42";
console.log(myAtoi(s));

// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.
