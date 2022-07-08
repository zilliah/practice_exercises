var maxSequence = function(arr){
  if (arr.length === 0 || arr.every(x => x <= 0)) return 0;
  else if (arr.every(x => x >= 0)) return arr.reduce((a,b) => a + b);
  
  let max = 0;
  
  for (let x = 0; x < arr.length; x++) {
    for (let i = x + 1; i <= arr.length; i++) {
      let currSum = arr.slice(x, i).reduce((a,b) => a + b);
      if (currSum > max) max = currSum;
    }
  }
  return max;
}