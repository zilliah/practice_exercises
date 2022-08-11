function howMuchILoveYou(n) {
  const arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];
  return arr[(n - 1) % arr.length];
}
