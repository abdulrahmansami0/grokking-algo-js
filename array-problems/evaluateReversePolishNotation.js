/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  let stack = [];
  const operation = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let result = operation[token](num1, num2);
      stack.push(parseInt(result));
    }
  });

  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));