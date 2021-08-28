/* 
Find the odd int
https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(a) {
    let count = {};

    for (let num of a) {
        if (count[num]) count[num]++;
        else count[num] = 1;
    }

    for (let c in count) {
        if (count[c] % 2 !== 0) {
          return Number(c);
        } 
    }
}