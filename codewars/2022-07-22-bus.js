var number = function(busStops){
  let currPpl = 0;
  for (let stop of busStops) {
    currPpl += stop[0];
    currPpl -= stop[1];
  }
  return currPpl;
}