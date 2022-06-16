function parse( data ){
  let res = 0;
  let arr = [];
  
  data.split("").forEach(x => {
    switch (x) {
        case "i":
          res++;
          break;
        case "d":
          res--;
          break;
        case "s":
          res = res ** 2;
          break;
        case "o":
          arr.push(res);
          break;
    }
  })
  return arr;
}
