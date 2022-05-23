function extractIds(data){
  let ids = [];
  for (let key in data) {
    if (key === "id") ids.push(data[key]);
    else if (key === "items") {
      for (let obj of data[key]) ids.push(...extractIds(obj));
    }
  }
  return ids;
}