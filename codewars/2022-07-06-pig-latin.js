function pigIt(str){
  return str.split(" ").map(x => x.match(/^[A-Z|a-z]/) ? x.slice(1) + x.slice(0,1) + "ay" : x).join(" ");
}