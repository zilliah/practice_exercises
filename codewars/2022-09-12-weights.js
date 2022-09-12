function rowWeights(array){
  const weights = [0,0];
  for (let i = 0; i < array.length; i++) {
    i % 2 === 0 ? weights[0] += array[i] : weights[1] += array[i];
  }
  return weights;
}