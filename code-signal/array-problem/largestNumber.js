/**
 * 
 * {Given an integer n,
 * return the largest number
 * that contains exactly n digits.
 * @param {For n = 2, the output should be}
 * @return {solution(n) = 99}
 * @returns 
 */

function solution(n) {
  let num = Array(n).fill(9);
  return +num.join("");
}

console.log(solution(4));