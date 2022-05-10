function score( dice ) {
  let sorted = dice.sort().join("");
  let total = 0;

  let triples = {
    "111": 1000,
    "666": 600,
    "555": 500,
    "444": 400,
    "333": 300,
    "222": 200,
  }
  
  let singles = {
    "1" : 100,
    "5" : 50
  }
  
  let matches = true;
  function checkPoints(obj) {
      for (let key in obj) {
        if (sorted.includes(key)) {
          matches = true
          sorted = sorted.replace(key, "");
          total += obj[key];
        } else matches = false;
      }
  }
  
  while(matches) {
    checkPoints(triples);
    checkPoints(singles);
  }
  
  return total;
}