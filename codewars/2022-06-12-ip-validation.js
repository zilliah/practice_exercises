function isValidIP(str) {
  let ns = str.split(".");
  if (ns.length !== 4) return false;
  
  return ns.every(n => {
    if (n == ""|| n > 255 || n < 0 || n.match(/\D/) || (n[0] == 0 && n.length > 1)) return false;
    else return true;
  })
}