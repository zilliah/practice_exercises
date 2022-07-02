// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let numBeers = Math.floor(bonus / price);

  let levels = 0;
  while (numBeers > 0) {
    levels++;
    let currBeers = levels ** 2;
    if (currBeers > numBeers) return --levels;
    else numBeers -= currBeers;
  }
  
  return levels;
}