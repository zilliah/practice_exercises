function stockList(listOfArt, listOfCat){
  let catCount = {};
  for (let cat of listOfCat) catCount[cat] = 0;
  
  for (let art of listOfArt) {
    let [currCat, currCount] = art.split(" ");
    if (catCount[currCat[0]] !== undefined) catCount[currCat[0]] += Number(currCount);
  }
  
  let res = [];
  let zeros = true;
  for (let cat in catCount) {
    res.push(`(${cat} : ${catCount[cat]})`);
    if (zeros && catCount[cat] > 0) zeros = false;
  }

  return zeros ? "" : res.join(" - ");
}