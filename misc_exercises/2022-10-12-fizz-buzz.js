// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        // % 5 and 3 -> % 15
        if (i % 15 === 0) console.log("Fizz Buzz");
        // % 3
        else if (i % 3 === 0) console.log("Fizz");
        // % 5
        else if (i % 5 === 0) console.log("Buzz");
        //none
        else console.log(i);
    }
}

//n = integer, +/-
//return - no return, only print out to console

fizzBuzz(1); //1
fizzBuzz(3); //1, 2, Fizz
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(103);