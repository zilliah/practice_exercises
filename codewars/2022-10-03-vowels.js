function vowelIndices(word){
  let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[aeiouyAEIOUY]/)) indices.push(i + 1);
  }
  return indices;
}