function arrayManip(array){
    return array.map((el, i) => {
        const sortedArr = array.slice(i + 1).sort((a,b) => a - b);
        return sortedArr.find(x => x > el) || -1;
    });
}

//array = array, don't modify
//return = new array, each element replaced by least greater el to the right (or -1 if not found)

console.log(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]));
console.log([18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]);