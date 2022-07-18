function isTriangle(a,b,c) {
    if (Math.min(a,b,c) <=0 ) return false;
    let sorted = [a,b,c].sort((a,b) => a - b);
    if (sorted[0] + sorted[1] <= sorted[2]) return false;
    return true;
  }