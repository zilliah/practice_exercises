function inAscOrder(arr) {
  return arr.every((el, i) => i === arr.length - 1 || el <= arr[i + 1]);
}