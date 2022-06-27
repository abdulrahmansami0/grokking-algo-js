const chunkedArray = (array, n) => {
  const chunked = [];

  for (let i = 0; i < array.length; i++) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === n) {
      chunked.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }

  return chunked;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
