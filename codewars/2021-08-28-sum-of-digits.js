/* 
Sum of Digits / Digital Root
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.
*/

function digital_root(n) {
    while (n > 9) {
      let nArr = n.toString().split("");
      n = nArr.reduce((x,y) => Number(x) + Number(y));
    }
    return n;
}
