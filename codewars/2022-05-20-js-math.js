function calculate(...n) {
  return function(...m) {
    let full = [...n, ...m];
    return full.reduce((a,b) => a + b);
  }
}