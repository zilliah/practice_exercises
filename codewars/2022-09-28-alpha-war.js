function alphabetWar(fight) {

  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1, 
    score: 0
  }
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1, 
    score: 0
  }
  for (let char of fight) {
    if (left[char]) left.score += left[char];
    else if (right[char]) right.score += right[char];
  }

  if (left.score > right.score) return "Left side wins!";
  else if (right.score > left.score) return "Right side wins!"
  else return "Let's fight again!";
}