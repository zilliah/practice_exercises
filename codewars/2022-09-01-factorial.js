function factorial(n) {
  if (n < 0 || n > 12) throw new Error("RangeError");
  let res = 1;
  while (n > 1) {
    res *= n;
    n--;
  } 
  return res;
}