function positiveSum(arr) {
  let sum = 0;
  for (let n of arr) {
    if (n > 0) sum += n;
  }
  return sum;
}