function numberOfPairs(gloves){
    let sortedGloves = gloves.slice().sort();
    let gloveCount = 0;
    while (sortedGloves.length > 0) {
        let endIndex = sortedGloves.lastIndexOf(sortedGloves[0]);
        const currArr = sortedGloves.splice(0, endIndex + 1);
        gloveCount += Math.floor(currArr.length / 2);
    }
    return gloveCount;
}


//examples:
console.log(numberOfPairs(["red", "green", "red"]), 1);
console.log(numberOfPairs(["red", "green"]), 0);
console.log(numberOfPairs(["blue", "green", "blue", "green", "red"]), 2);
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]), 3);
