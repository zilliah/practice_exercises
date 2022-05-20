function runningAverage() {
  let sum = 0;
  let count = 0;
  
  return function(n) {
    sum += n;
    count++;
    return Math.round((sum/count) * 100) / 100;
  }
}
