function parseInt(string) {
  const words = {
    zero: 0,
    one: 1, 
    two: 2, 
    three: 3,
    four: 4, 
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9, 
    ten: 10,
    eleven: 11,
    twelve: 12, 
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16, 
    seventeen: 17, 
    eighteen: 18, 
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40, 
    fifty: 50, 
    sixty: 60, 
    seventy: 70, 
    eighty: 80, 
    ninety: 90,
  }
  
  if (words[string]) return words[string];
  
  let arr = string.split(" ").filter(x => x !== "and");
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "hundred" && arr[i] !== "thousand" && arr[i] !== "million") {
      let currNum = 0;

      //handle hyprens
      if (arr[i].includes("-")) {
          let currArr = arr[i].split("-");
          for (let n of currArr) {
            currNum += words[n];
            console.log(res);
          }
      } else currNum = words[arr[i]];

      //handle hundreds, thousands, millions
      let mult = 1;
      if (arr[i+1] === "hundred") {
        if (arr[i+2] === "thousand" || arr[i+3] === "thousand") {
          mult = 100000;
        }
        else mult = 100;
      }
      else if (arr[i+1] === "thousand") mult = 1000;
      else if (arr[i+1] === "million") mult =  1000000;

      res += currNum * mult;
    }
  }
  return res;
}