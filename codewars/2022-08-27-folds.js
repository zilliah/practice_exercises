function foldArray(array, folds) {
    let foldingArr = array.slice();
    let newArr = [];
    while (folds > 0) {
        for (let i = 0; i < Math.ceil(foldingArr.length / 2); i++) {

            if (foldingArr.length % 2 !== 0 && i === Math.ceil(foldingArr.length / 2) - 1) newArr.push(foldingArr[i]);
            else newArr.push(foldingArr[i] + foldingArr[foldingArr.length - i - 1]);
        }
        foldingArr = newArr;
        newArr = [];
        folds--;
    } 
    return foldingArr;
}

//input: array of numbers, +ve integer for # of folds
//return: array, "folded" array

//examples
// console.log("==================");
// console.log(foldArray([1, 2], 1));
// console.log([3]);
// console.log("==================");
// console.log(foldArray([1, 2, 3], 1));
// console.log([4, 2]);
// console.log("==================");
// console.log(foldArray([1, 2, 3], 2));
// console.log([6]);
// console.log("==================");
// console.log(foldArray([3, 3, 1, 5, 2, 2, 7], 1));
// console.log([10, 5, 3, 5]);
// console.log("==================");
// console.log(foldArray([3, 3, 1, 5, 2, 2, 7], 2));
// console.log([15, 8]);
// console.log("==================");
// console.log(foldArray([3, 3, 1, 5, 2, 2, 7], 3));
// console.log([23]);
// console.log("==================");
console.log(foldArray([1,2,3,4,5], 2));
console.log([9,6]);
console.log("==================");
