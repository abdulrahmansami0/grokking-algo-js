/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = (encoded, first) => {
  let arr = [];
  arr[0] = first;

  for (let i = 0; i < encoded.length; ++i) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }

  return arr;
};

console.log(decode((encoded = [1, 2, 3]), (first = 1)));
