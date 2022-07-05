function toUnderscore(string) {
  if (typeof string === "number") return String(string);
  
  return string.split("").map((n,i) => {
    if (n.match(/[A-Z]/)) {
      if (i !== 0) return "_" + n.toLowerCase();
      else return n.toLowerCase();
    } else return n;
  }).join("");
}