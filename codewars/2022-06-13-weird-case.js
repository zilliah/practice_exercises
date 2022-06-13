function toWeirdCase(string){
  return string.split(" ").map(word => word.split("").map((x, i) => i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()).join("")).join(" ");
}