function sumConsecutives(s) {
    let newArr = [];
    let curr = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] == s[i+1]) curr.push(s[i]);
      else {
        if (curr.length > 0) newArr.push(curr[0] * (curr.length + 1));
        else newArr.push(s[i])
        curr = [];
      }
    }
    return newArr;
  }