const countMatches = (items, ruleKey, ruleValue) => {
  let keyRule = ["type", "color", "name"];
  let count = 0;
  for (let i = 0; i < items.length; ++i) {
    for (let j = 0; j < items[i].length; ++j) {
      if (items[i][j] === ruleValue && keyRule[j] === ruleKey) {
        count++;
      }
    }
  }
  return count;
};

let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey = "color";
let ruleValue = "silver";

countMatches(items, ruleKey, ruleValue);
