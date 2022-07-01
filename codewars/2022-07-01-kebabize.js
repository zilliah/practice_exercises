function kebabize(str) {
  return str.split("").map(x => {
    if (!x.match(/[a-z]|[A-Z]/)) return "";
    return x.toUpperCase() === x ? "-" + x.toLowerCase() : x;
  }).join("").replace(/^-/,"");
}