function revrot(str, sz) {
  if (sz == 0 || str.length === 0 || sz > str.length) return "";
  
  let list = [];
  for (let i = 0; i < str.length ; i += sz) {
    let curr = str.slice(i, i + sz);
    if (curr.length < sz) break;
    list.push(curr);
  }
  
  return list.map(chunk => {
    let sq = chunk.split("").reduce((a,b) => a + b ** 2, 0);
    return sq % 2 === 0 ? chunk.split("").reverse().join("") : chunk.slice(1) + chunk[0]
 }).join("");
}