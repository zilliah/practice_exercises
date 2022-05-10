function duplicateCount(text){
  let lower = text.toLowerCase();
  let count = {};
  
  for (let char of lower) {
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  let num = 0;
    for (let char in count) {
    if (count[char] > 1) num ++;
  }
  
  return num;
}