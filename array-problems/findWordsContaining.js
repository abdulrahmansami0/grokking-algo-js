function findWordsContaining(words, x) {
  let indexArr = [];
  let chars = words.toString();
  let counter = 0;
  for (let i = 0; i < chars.length; ++i) {
    if (chars[i] === x) {
      indexArr[counter] = counter;
    }
    if (chars[i] === ",") {
      counter++;
    }
  }

  return indexArr.filter((element) => typeof element === "number");
}

let words = ["leet", "code"];
let x = "e";
console.log(findWordsContaining(words, x));
