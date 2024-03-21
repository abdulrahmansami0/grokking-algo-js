/**
 * @param {number} n
 * @return {boolean}
 */

// time complexity O()
var isHappy = function (n) {
  let prevNum = new Set();
  let digits = String(n);

  while (digits.length) {
    if (+digits === 1) return true;
    let num = 0;
    for (let i = 0; i < digits.length; ++i) {
      num += digits[i] ** 2;
    }
    if (prevNum.has(num)) return false;
    digits = String(num);
    prevNum.add(num);
  }

  return false;
};

console.log(isHappy(19));
