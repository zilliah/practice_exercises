function multiplyAll(arr) {
  return function multiply(n) {
    return arr.map(x => x * n);
  }
}

