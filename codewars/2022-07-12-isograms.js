function isIsogram(str){
  return !str.toLowerCase().split("").sort().join("").match(/(.)\1+/);
}