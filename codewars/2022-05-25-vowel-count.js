function getCount(str) {
  return str.split("").filter(x => x.match(/a|e|i|o|u/)).length;
}