var solution = function(firstArray, secondArray) {
  return firstArray.map((x, i) => Math.abs(x - secondArray[i]))
    .map(x => x ** 2)
    .reduce((a,b) => a + b) / firstArray.length;
}