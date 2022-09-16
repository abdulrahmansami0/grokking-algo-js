/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs2 = (nums) => {
  let hashMap = {};
  let pair = 0;
  let leftOver = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }
  for (const [_key, value] of Object.entries(hashMap)) {
    pair += Math.floor(value / 2);
    leftOver += value % 2;
  }
  return [pair, leftOver];
};

let nums = [1, 3, 2, 1, 3, 2, 2];
console.log(numberOfPairs2(nums));

// fail method
// const numberOfPairs = (nums) => {
//     let hashMap = {};
//     let result = [];
//     let max = 0;
//     let ans = [];
//     for(let i = 0; i < nums.length; ++i) {
//         if(!hashMap[nums[i]]) {
//             hashMap[nums[i]]=1;
//         } else {
//             hashMap[nums[i]]++;
//         }
//     }

//     for (const [key, value] of Object.entries(hashMap)) {
//         let arrObj = Object.values(hashMap);
//         max = Math.max(...arrObj);
//         console.log(value)
//         if(value >= 2) {
//            let counter = value;
//            let deleteTimes;
//            if(counter % 2 === 0) {
//                deleteTimes = 0;
//            } else {
//                deleteTimes = 2;
//            }
//            for(let j = 0; j < nums.length; ++j) {
//                if(key === nums[j] && counter >= deleteTimes) {
//                    nums.splice(j, 1);
//                    j--;
//                    counter--;
//                }
//            }
//         }
//     }
//  };
