function generateShape(integer){
  let str = "";
  for (let i = 1; i <= integer; i++) {
    str += ("+").repeat(integer) + "\n";
  }
  return str.trim();
}