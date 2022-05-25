function permutations(string) {
  let arr = string.split("");
  
  console.log(arr);
  console.log("--------------------");
  
  if (arr.length === 1) return arr;
  
  else if (arr.length === 2) {
    let first = arr[0] + arr[1];
    let second = arr[1] + arr[0];
    return [first, second];
    
  } else {
  //go through the array
  //take each letter as the starting letter
  //unless it's already been in the front (duplicates)
    let charsDone = [];
    let perms = [];
    
    for (let i = 0; i < arr.length; i++) {
      let initial = arr[i];
      if (charsDone.includes(initial)) {
        //the current initial char has been done already
        break;
      } else {
        charsDone.push(initial);
        let leftovers = [...arr.slice(0,i), ...arr.slice(i + 1)];
        console.log("leftovers:");
        console.log(leftovers);
        
        
        perms.push(initial + permutations(leftovers.join("")));
        
      }
    }
    console.log(perms);
    return perms;
  }
}

console.log(`==========${permutations('a')}, ['a']=============`);
console.log(`=========${permutations('ab').sort()}, ${['ab', 'ba'].sort()}================`);
console.log(`==========${permutations('aabb').sort()}, ${['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()}=================`);