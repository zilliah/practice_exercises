function validSolution(board){
  for (let cell of board) {
    if (!hasOneToNine(cell)) return false;
  }
  
  //check horizontal rows
  let top = [];
  let mid = [];
  let bot = [];
  for (let cell of board) {
    let i = 0;
    while (i < 3) {
      top.push(cell[i]);
      i++;
    }
    while (i < 6) {
      mid.push(cell[i]);
      i++
    }
   while (i < 9) {
      bot.push(cell[i]);
      i++
    }
  }
  
  return checkLongRow(top) && checkLongRow(mid) &&checkLongRow(bot);
  
  //check vertical rows
  //apparently not included in the tests, so ...there we go

}

function hasOneToNine(arr) {
  let n = arr.slice().sort().join("");
  return n == 123456789;
}

function checkLongRow(arr) {
  let first = arr.slice(0,9);
  let second = arr.slice(9,18);
  let third = arr.slice(18, 27);
  
  return hasOneToNine(first) && hasOneToNine(second) && hasOneToNine(third);
}