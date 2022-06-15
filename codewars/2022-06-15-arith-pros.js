var findMissing = function (list) {  
  //find diff
  let diff;
  if (list.length === 3) {
    let diff1 = list[1] - list[0];
    let diff2 = list[2] - list[1];
    diff = Math.abs(diff1) > Math.abs(diff2) ? diff2 : diff1;
  }
  //find the idex of the missing value
  for (let i = 0; i < list.length - 2; i++) {
    if (list[i+1] - list[i] === list[i+2] - list[i+1]) {
      diff = list[i+1] - list[i];
      break;
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] + diff !== list[i+1]) return list[i] + diff;
  }
}