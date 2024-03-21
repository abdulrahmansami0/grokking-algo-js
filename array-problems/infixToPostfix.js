const isNotOperator = (token) => {
  return (
    (token >= "a" && token <= "z") ||
    (token >= "A" && token <= "Z") ||
    (token >= "0" && token <= "9")
  );
};

const infixToPostfix = (infix) => {
  const priority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  let postfix = [];
  let stack = [];

  for (let i = 0; i < infix.length; i++) {
    let token = infix[i];
    if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack[stack.length - 1] !== "(") {
        postfix.push(stack.pop());
      }
      stack.pop();
    } else if (isNotOperator(token)) {
      postfix.push(token);
    } else {
      while (
        stack.length &&
        priority[stack[stack.length - 1]] >= priority[token]
      ) {
        postfix.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    postfix.push(stack.pop());
  }

  return postfix.join("");
};

console.log(infixToPostfix("a+b/c*d-e"));
