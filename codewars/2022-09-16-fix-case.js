function solve(s){
    const lower = s.replace(/[A-Z]/g, "")
    const upper = s.replace(/[a-z]/g, "");
    if (lower.length >= upper.length) return s.toLowerCase();
    else return s.toUpperCase();
  }