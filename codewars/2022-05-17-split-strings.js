function solution(str){
  if (str === "") return [];
  let split = [];
  
  while (str.length > 0) {
    split.push(str.slice(0,2));
    str = str.slice(2);
  }
  
  if (split[split.length - 1].length === 1) {
    split[split.length - 1] = split[split.length - 1] + "_";
  } 
  return split;
}