/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

*/




function persistence(num, count=0) {
    if ((String(num)).length === 1) return count;
    count++;
    return persistence(String(num).split("").reduce((a,b) => a * b), count);
}

