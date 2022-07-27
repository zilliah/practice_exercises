var number=function(array){
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(`${i + 1}: ${array[i]}`)
  }
  return res;
}