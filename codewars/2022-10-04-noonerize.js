function noonerize(numbers) {
  if (numbers.some(el => el + 0 !== el)) return "invalid array";
  let a = String(numbers[1])[0] + String(numbers[0]).slice(1);
  let b = String(numbers[0])[0] + String(numbers[1]).slice(1);
  return Math.abs(a - b);
}