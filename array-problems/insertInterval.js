/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return res.concat(intervals.slice(i));
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  res.push(newInterval);
  return res;
};

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:

//     0 <= intervals.length <= 104
//     intervals[i].length == 2
//     0 <= starti <= endi <= 105
//     intervals is sorted by starti in ascending order.
//     newInterval.length == 2
//     0 <= start <= end <= 105
