function capitalize(s){
  let res = ["", ""];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      res[0] += s[i].toUpperCase();
      res[1] += s[i].toLowerCase();
    } else {
      res[0] += s[i].toLowerCase();
      res[1] += s[i].toUpperCase();
    } 
  }
  return res;
};