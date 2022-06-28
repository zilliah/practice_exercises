function tripledouble(num1, num2) {
  let found = String(num1).match(/(\d)\1\1/g);
  if (found) {
    for (let num of found) {
      let curr = num[0]
      if (String(num2).match(curr.repeat(2))) return 1;
    }
  } 
  return 0;
}