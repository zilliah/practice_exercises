function nbDig(n, d) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2);
  }
  let reg = new RegExp(d, "g");
  let str = arr.join("");
  
  return str.length - str.replace(reg, "").length;
}