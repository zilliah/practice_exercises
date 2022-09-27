function evenNumbers(array, number) {
  const filtered = array.filter(x => x % 2 === 0);
  return filtered.slice(filtered.length - number);
}