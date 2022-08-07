function reverse(str){
  return str.trim().split(" ").map((x,i) => i % 2 === 0 ? x : x.split("").reverse().join("")).join(" ");
}