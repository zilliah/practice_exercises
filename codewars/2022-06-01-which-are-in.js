function inArray(array1,array2){
  return array1.filter(subString => {
    for (let word of array2) {
      if (word.includes(subString)) return true;
    }
    return false;
  }).sort();
}