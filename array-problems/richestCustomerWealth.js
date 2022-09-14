/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let customersArray = [];
  for (let i = 0; i < accounts.length; ++i) {
    let customerCost = 0;
    for (let j = 0; j < accounts[i].length; ++j) {
      customerCost = customerCost + accounts[i][j];
    }
    customersArray.push(customerCost);
  }
  return Math.max(...customersArray);
};

let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
