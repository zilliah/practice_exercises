function dontGiveMeFive(start, end) {
  let res = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes(5)) res++;
  }
  return res;
}