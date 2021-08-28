/* Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

*/

function validParentheses(parens){
    if (parens.length === 0) return true;
    if (parens.length === 1) return false;
    if (parens.replace("()","") === parens) return false;
    else return validParentheses(parens.replace("()",""));
}


console.log(validParentheses("("));
console.log(validParentheses("()"));
console.log( validParentheses("(())("));
console.log(validParentheses("(())()"));
console.log(validParentheses("(())(()()()))((()(())("));
console.log(validParentheses("()()()(())(())((()))((()()()))"));
