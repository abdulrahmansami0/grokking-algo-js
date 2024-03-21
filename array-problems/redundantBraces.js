const redundantBraces = (A) => {
  let stack = [];
  let hashMap = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };

  for (let i = 0; i < A.length; ++i) {
    if (A[i] !== ")") {
      stack.push(A[i]);
    } else {
      let count = 0;
      while (stack[stack.length - 1] !== "(") {
        if (hashMap[stack.pop()]) {
          count++;
        }
      }
      stack.pop();

      if (count === 0) return 1;
    }
  }

  return 0;
};

// Input 1:
//  A = "((a+b))"

// Input 2:
//  A = "(a+(a+b))"

// Input 3:
//  A = "((a*b)+(c+d))"
