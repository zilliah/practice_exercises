function XO(str) {
  let count = { x:0, o:0 }
  
  for (let char of str.toLowerCase()) {
    if (char === "x") count.x++;
    else if (char === "o") count.o++;
  }
  return count.x === count.o;
}