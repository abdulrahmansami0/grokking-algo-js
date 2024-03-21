/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  let strArr = s.split("");
  while (left <= right) {
    if (isLetter(strArr[left]) && isLetter(strArr[right])) {
      let temp = strArr[right];
      strArr[right] = strArr[left];
      strArr[left] = temp;
      right--;
      left++;
    } else if (isLetter(strArr[left]) && !isLetter(strArr[right])) {
      right--;
    } else if (!isLetter(strArr[left]) && isLetter(strArr[right])) {
      left++;
    } else if (!isLetter(strArr[left]) && !isLetter(strArr[right])) {
      right--;
      left++;
    }
  }

  return strArr.join("");
};

function isLetter(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:

//     1 <= s.length <= 100
//     s consists of characters with ASCII values in the range [33, 122].
//     s does not contain '\"' or '\\'.
