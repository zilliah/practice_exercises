function spoonerize(words) {
  return words.split(" ").map((el,i, arr) => i === 0 ? arr[i+1][0] + el.slice(1) : arr[i-1][0] + el.slice(1)).join(" ");
}