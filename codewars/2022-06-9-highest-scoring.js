function high(x){
  let arr = x.split(" ");
  const alpha = "0abcdefghijklmnopqrstuvwxyz";
  
  function getScore(word) {
    let count = 0;
    for (let char of word) {
      count += alpha.indexOf(char);
    }
    return count;
  }
  
  let score = [];
  for (let word of arr) {
    score.push([word, getScore(word)]);
  }
  score.sort((a,b) => b[1] - a[1]);
  return score[0][0];
}