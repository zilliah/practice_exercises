function solution(list){

  let indicated = list.map((el,index) => {
    let before = list[index - 1];
    let after = list[index + 1];
    if (before + 1 === el && after - 1 === el) return "range";
    else if (before + 1 !== el && after - 1 !== el) return "single";
    else if (after - 1 === el) return "start";
    else if (before + 1 === el) return "end";
   });
  
  let cleared = indicated.map((el, index) => {
    if (el === "start" && indicated[index + 1] !== "range") return "single";
    else if (el === "end" && indicated[index - 1] !== "range") return "single";
    else return el;
  });
  
  let condensedArr = cleared.map((el, index) => {
    switch (el) {
        case "range":
          return false
        case "single":
          return list[index] + ",";
        case "start":
          return list[index] + "-"
        case "end":
          return list[index] + ",";
    }
  });
    
  return condensedArr.filter(x => x).join("").replace(/,$/,"");
}