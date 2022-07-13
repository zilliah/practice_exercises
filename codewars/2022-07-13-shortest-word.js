function findShort(s){
  return s.split(" ").reduce((a,b) => a.length > b.length ? b : a).length;
}