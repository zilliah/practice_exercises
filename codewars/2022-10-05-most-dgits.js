function findLongest(array){
  return array.reduce((a,b) => String(a).length >= String(b).length ? a : b);
}