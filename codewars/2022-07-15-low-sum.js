function sumTwoSmallestNumbers(numbers) {  
  const min1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min1), 1);
  const min2 = Math.min(...numbers);
  return min1 + min2;
}