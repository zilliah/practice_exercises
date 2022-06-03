function wave(str){
  return str.split("").map((_, index) => {
    if (str[index] === " ") return false;
    return  str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
  }).filter(x => x);
}