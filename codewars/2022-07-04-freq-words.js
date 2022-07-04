function topThreeWords(text) {
  
  let arr = text.toLowerCase().split(/\s|[^a-z']/).filter(x => {
    if (x === "") return false;
    if (x === "\'") return false;
    else return true;
  });
  
  if (arr.length === 0) return [];
  if (arr.length < 3) return arr; 

  let count = {};
  for (let word of arr) count[word] ? count[word]++ : count[word] = 1;
  
  let topThree = Object.values(count).sort().reverse().slice(0, 3);

  for (let word in count) {
    if (count[word] === topThree[0]) topThree[0] = word;
    if (count[word] === topThree[1] && topThree[0] !== word) topThree[1] = word;
    if (count[word] === topThree[2] && topThree[0] !== word && topThree[1] !== word) topThree[2] = word;
  }
  
  return topThree;
}