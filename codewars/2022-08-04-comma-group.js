function groupByCommas(n) {
  return String(n)
    .split("")
    .reverse()
    .map((el, i) => (i % 3 === 0 && i !== 0) ? el + "," : el)
    .reverse()
    .join("");
}