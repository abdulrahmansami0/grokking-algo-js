/**
    Example 1:
    @param {Input: jewels = "aA", stones = "aAAbbbb"}
    @param {Output: 3}
    
    Example 2:
    @param {Input: jewels = "z", stones = "ZZ"}
    @param {Output: 0}
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  let hashMap = {};
  let count = 0;
  for (let i = 0; i < jewels.length; ++i) {
    hashMap[jewels[i]] = true;
  }

  for (let i = 0; i < stones.length; ++i) {
    if (hashMap[stones[i]]) {
      count++;
    }
  }

  return count;
};
