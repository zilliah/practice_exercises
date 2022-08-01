function groupByCommas(n) {
  let m = String(n).split("").reverse().join("");
  let arr = [];
  for (let i = 0; i < m.length; i++) {
    if (i % 3 === 0 && i > 2) arr.push(m[i] + ",");
    else arr.push(m[i]);
  };
  return arr.reverse().join("");
}