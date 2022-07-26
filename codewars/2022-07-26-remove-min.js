function removeSmallest(numbers) {
  let copy = numbers.slice();
  copy.splice(copy.indexOf(Math.min(...copy)), 1);
  return copy;
}