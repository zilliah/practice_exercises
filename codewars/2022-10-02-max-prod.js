function adjacentElementsProduct(array) {
  return array.reduce((a,b, i, arr) => b * arr[i+1] > a ? b * arr[i+1] : a , array[0] * array[1]);
}