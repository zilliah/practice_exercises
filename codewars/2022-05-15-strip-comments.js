function solution(input, markers) {
  let mutable = input;
  let cleared = "";
  for (let mark of markers) {
    while (mutable.indexOf(mark) > 0) {
      let first = mutable.indexOf(mark);
      let newLine = mutable.indexOf("\n", first);
      cleared += mutable.slice(0, first).trim() + "\n";
      mutable = mutable.slice(newLine, mutable.length);
    }
  }
  return cleared.trim();
};