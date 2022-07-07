function rot13(message){
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const caps = abc.toUpperCase();
  
  return message.split("").map(x => {
    if (abc.indexOf(x) !== -1) {
      let i = (abc.indexOf(x) + 13) % 26;
      return abc[i];
    }
    else if (caps.indexOf(x) !== -1) {
      let i = (caps.indexOf(x) + 13) % 26;
      return caps[i];
    }
    else return x;
  }).join("");
}