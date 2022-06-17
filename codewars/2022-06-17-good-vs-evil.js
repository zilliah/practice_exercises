function goodVsEvil(good, evil){
  const goodWin = "Battle Result: Good triumphs over Evil";
  const evilWin = "Battle Result: Evil eradicates all trace of Good";
  const draw = "Battle Result: No victor on this battle field";
  const goodScoring = [1,2,3,3,4,10];
  const evilScoring = [1,2,2,2,3,5,10];
  
  function getScore(count, scoring) {
    return count.split(" ").map((x,i) => [x,scoring[i]]).reduce((a,b) => a + (b[0] * b[1]),0);
  }
  
  let goodSum = getScore(good, goodScoring);
  let evilSum = getScore(evil, evilScoring);
  
  if (goodSum > evilSum) return goodWin;
  else if (goodSum < evilSum) return evilWin;
  return draw;
}
