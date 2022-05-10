function generateHashtag (str) {
  let spaced = str.replace(/\s{2,}/," ");
  if (spaced === "" || spaced === " " || spaced.length >= 140) return false;
  return `#${spaced.split(/\s/).map(word => word[0].toUpperCase() + word.slice(1, word.length)).join("")}`;
}