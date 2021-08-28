/* Spinning words
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
*/

function spinWords(string){
    return string.split(" ").map(w => w.length >= 5 ? w.split("").reverse().join("") : w).join(" ");
}