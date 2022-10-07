function reverseNumber(n) {
  return n >= 0 ? Number(String(n).split("").reverse().join("")) : -1 * Number(String(-n).split("").reverse().join(""))
}