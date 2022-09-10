function removeDuplicateWords(s) {
  const set = new Set(s.split(" "));
  return [...set].join(" ");
}