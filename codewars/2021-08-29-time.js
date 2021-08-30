/* Human readable time
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
*/



function humanReadable(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - 3600 * hour) / 60);
    let sec = seconds - 3600 * hour - 60 * min;

    return `${timeToString(hour)}:${timeToString(min)}:${timeToString(sec)}`;

}


function timeToString(str) {
    str = String(str);
    return str.length === 1 ? "0"+str : str;
}