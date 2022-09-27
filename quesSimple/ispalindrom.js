// const isPalindrom = (str) => {
//   let arr = [];
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }

//   return result.join("") === str;
// };

// console.log(isPalindrom("ama"));

// (function (str) {
//   let reversed = "";
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   console.log(reversed === str);
// })("sts");

var isPalindrome = function (s) {
  let newStr = s.replace(/\,/g, "").toLowerCase();
  newStr = newStr.replace(/\:/g, "");
  newStr = newStr.replace(/\./g, "");
  newStr = newStr.replace(/\@/g, "");
  newStr = newStr.replace(/\#/g, "");
  newStr = newStr.replace(/\_/g, "");
  newStr = newStr.replace(/\[/g, "");
  newStr = newStr.replace(/\]/g, "");
  newStr = newStr.replace(/\"/g, "");
  newStr = newStr.replace(/\}/g, "");
  newStr = newStr.replace(/\{/g, "");
  newStr = newStr.replace(/\'/g, "");
  newStr = newStr.replace(/\-/g, "");
  newStr = newStr.replace(/\?/g, "");
  newStr = newStr.replace(/\;/g, "");
  newStr = newStr.replace(/\!/g, "");
  newStr = newStr.replace(/\(/g, "");
  newStr = newStr.replace(/\)/g, "");
  newStr = newStr.replace(/\`/g, "");
  newStr = newStr.replace(/\s/g, "");

  let newStr2 = newStr.split("").reverse().join("");
  return newStr2 === newStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// O(n) time and O(1) space
const isPalindrome2 = (string) => {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome2("A man, a plan, a canal: Panama"));
