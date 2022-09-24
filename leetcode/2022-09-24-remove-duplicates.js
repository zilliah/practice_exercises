/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    console.log(nums)
    return nums.filter((el, i, arr) => {
        
        //if it's the first, keep it
        console.log(i === arr.indexOf(el)   );
        return i === arr.indexOf(el);
        
        //remove subsequent duplicates
        
        
    });
};

console.log(removeDuplicates([1,1,2]), [1,2]);