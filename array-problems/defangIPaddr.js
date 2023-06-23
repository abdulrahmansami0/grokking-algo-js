/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  let str = "";
  for (let i = 0; i < address.length; ++i) {
    if (address[i] === ".") {
      str += "[";
      str += address[i];
    } else if (address[i - 1] === ".") {
      str += "]";
      str += address[i];
    } else {
      str += address[i];
    }
  }

  return str;
};

console.log(defangIPaddr("1.1.1.1"));
