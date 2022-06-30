function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;
  
  let lengths = arrayOfArrays.map(arr => arr === null ? 0 : arr.length).sort((a,b) => a-b);
  
  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] === 0) return 0;
    if (lengths[i] + 1 !== lengths[i+1]) return lengths[i] + 1;
  }
}
