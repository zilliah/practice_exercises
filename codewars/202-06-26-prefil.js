function prefill(n, v) {
  let m;
  typeof n === "string" ? m = Number(n) : m = n;
  if (!Number.isInteger(m) || m < 0) throw new TypeError(`${n} is invalid`)
  
  if (m === 0) return [];
  return new Array(n).fill(v);
}