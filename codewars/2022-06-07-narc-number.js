function narcissistic(value) {
  let sum = String(value).split("").reduce((a,b) => {
   return a  + b ** String(value).length;
  }, 0);
  
  return sum == value ? true : false;
}
