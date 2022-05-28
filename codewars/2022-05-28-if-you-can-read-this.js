function to_nato(words) {
  return words.split(" ").map(
    word => word.toLowerCase().split("").map(
      c => NATO[c] ? NATO[c] : c).join(" ")).join(" ").trim();
}
