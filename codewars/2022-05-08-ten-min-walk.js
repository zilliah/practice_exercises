function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let northSouth = walk.map(x => {
    if (x === "n") return 1;
    else if (x === "s") return -1;
    else return 0;
  });
  let eastWest = walk.map(x => {
    if (x === "e") return 1;
    else if (x === "w") return -1;
    else return 0;
  });
  
  let sumNS = northSouth.reduce(arrSum)
  let sumEW = eastWest.reduce(arrSum);
  return (sumNS === 0 && sumEW === 0 ? true : false)
}

function arrSum(a, b) {
  return a + b;
}