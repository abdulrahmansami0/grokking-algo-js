/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  let stack = [];
  let pathArr = path.split("/");

  for (let i = 0; i < pathArr.length; ++i) {
    if (pathArr[i] === "") {
      continue;
    } else if (pathArr[i] === ".") {
      continue;
    } else if (pathArr[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(pathArr[i]);
    }
  }

  return "/" + stack.join("/");
};

console.log(simplifyPath("/home//foo/"));
/**
 * @param {string} path = "/home/"
 * @return {string} Output: "/home"
 * Explanation: Note that there is no trailing slash after the last directory name.
 */
