function firstNonRepeatingLetter(s) {
    let lower = s.toLowerCase();
    let hadOnce = "";
  
    
    for (let i = 0; i < lower.length; i++) {
      let curr = lower[i];
      let rest = lower.slice(i + 1);
      
      if (!rest.includes(curr) && !hadOnce.includes(curr)) return s[i];
      else hadOnce += curr;
    }
    return "";
  }