function squareDigits(num){
  return Number(String(num).split("").map(n => n**2).join(""));
}
