/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let hashMap = {};
  let ascii = 97;
  let result = "";

  for (let i = 0; i < key.length; ++i) {
    let char = key[i];
    if (!hashMap[char]) {
      if (char !== " ") {
        hashMap[char] = String.fromCharCode(ascii);
        ascii++;
      } else {
        hashMap[char] = undefined;
      }
    }
  }

  for (let i = 0; i < message.length; ++i) {
    result += hashMap[message[i]] ?? " ";
  }

  return result;
};

// Basic Test Case:
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Explanation: This test case is provided in the problem statement. It ensures that the function can correctly decode a message using the given key.

// Reversed Key:
// Input: key = "zyxwvutsrqponmlkjihgfedcba", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Explanation: This test case uses a key where the order of letters is reversed. It tests whether the function can handle keys with different orders.

// Random Key and Message:
// Input: key = "fjdskla poeri ncvzxmb qwyu tgh", message = "tuiot deoaq tdnxmc".
// Explanation: This test case uses a random key and message. It ensures that the function can handle arbitrary keys and messages and decode them correctly.

// Key with Spaces:
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vw olub p ozbo n la ahpuf "
// Explanation: This test case includes spaces in both the key and the message. It ensures that the function correctly handles spaces and substitutes them accordingly.

// Long Key and Message:
// Input: key = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", message = "abcd efgh ijkl mnop qrst uvwx yz".
// Explanation: This test case uses a long key and message. It tests whether the function can handle large inputs efficiently and produce the correct decoded message.
