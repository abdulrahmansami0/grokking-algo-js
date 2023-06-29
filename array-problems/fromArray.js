const arrayFrom = (iterable, mapFn, thisArg) => {
  if (iterable == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const items = Object(iterable);
  const length = items.length >>> 0;
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    if (mapFn) {
      array[i] =
        typeof thisArg !== "undefined"
          ? mapFn.call(thisArg, items[i])
          : mapFn(items[i]);
    } else {
      array[i] = items[i];
    }
  }

  return array;
};

// const str = "Hello";
// const charArray = arrayFrom(str);
// console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

// function getArgumentsArray() {
//   return arrayFrom(arguments);
// }
// const argsArray = getArgumentsArray(1, "two", true);
// console.log(argsArray); // Output: [1, 'two', true]

const numbers = [1, 2, 3];
const doubledArray = arrayFrom(numbers, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6]
