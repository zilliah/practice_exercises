function beggars(values, n){
    let res = Array.from("0".repeat(n)).map(x => Number(x));
    for (let i = 0; i < values.length; i++) {
      res[i % n] += values[i];
    }
    return res;
  }