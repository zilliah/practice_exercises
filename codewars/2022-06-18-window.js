function makeAWindow(num) {
  let width = 2 * num + 3;
  let row = `|${".".repeat(num)}|${".".repeat(num)}|\n`;
  return "-".repeat(width) + "\n" 
    + row.repeat(num) 
    + `|${"-".repeat(num)}+${"-".repeat(num)}|\n` 
    + row.repeat(num) 
    + "-".repeat(width);
}