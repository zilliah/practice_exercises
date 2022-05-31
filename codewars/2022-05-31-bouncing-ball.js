function bouncingBall(h,  bounce,  window) {
  if (h <= 0) return -1;
  if (bounce <= 0 || bounce >= 1) return -1;
  if (window >= h) return -1;
  
  let currBounce = bounce * h;
  let passes = 1;
  while (currBounce > window) {
    passes++;
    currBounce = currBounce * bounce;
  }
  return passes * 2 - 1;
}