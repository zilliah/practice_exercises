function solution(digits){
  return digits.split("").reduce((a, b, i) => {
    let curr = digits.split("").slice(i, i + 5).join("");
    return Number(a > curr ? a : curr);
  }, 0);
}