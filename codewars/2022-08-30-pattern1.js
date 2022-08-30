function pattern(n){
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += String(i).repeat(i) + "\n";
  }
  return output.trim();
}