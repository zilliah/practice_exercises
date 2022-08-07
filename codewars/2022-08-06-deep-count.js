function deepCount(a){
  let count = 0;
  for (let el of a) {
    if (Array.isArray(el)) count += deepCount(el) + 1;
    else count++;
  }
  return count;  
}