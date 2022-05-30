function alphabetPosition(text) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return  text.toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map(c => alpha.indexOf(c) + 1)
    .join(" ");
}