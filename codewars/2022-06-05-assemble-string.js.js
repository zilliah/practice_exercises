function assembleString(array){
  if (array.length < 1) return "";
  let word = array[0].split(""); 
  
  for (let i = 0; i < word.length; i++) {
    let replacement = "#";
    if (word[i] === "*") {
      for (let j = 1; j < array.length; j++) {
        if (array[j][i] !== "*") replacement = array[j][i];
      }
      word[i] = replacement;
    }
  }
  return word.join("");
}