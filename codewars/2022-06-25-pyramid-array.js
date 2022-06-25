function pyramid(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push("1".repeat(i).split("").map(x => Number(x)));
  }
  return arr;
}