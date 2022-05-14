function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((a,b) => a + b, 0);
    let rightSum = arr.slice(i + 1, arr.length).reduce((a,b) => a + b, 0);
    if (leftSum === rightSum) return i;
  }
  return -1;
}