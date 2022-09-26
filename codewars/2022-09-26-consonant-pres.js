const longestCommonPrefix = function(strs) {
        return strs.map(el => el.split(/[aeiou]/)[0]).sort().reduce((a,b, i, arr) => b.length > a.length && arr[i+1] === b ? b : a, "");
    };