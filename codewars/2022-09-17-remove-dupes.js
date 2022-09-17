function solve(arr) {
  return arr.filter((x,i) => arr.indexOf(x) === arr.lastIndexOf(x) || arr.lastIndexOf(x) === i)
}