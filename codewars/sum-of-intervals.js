function sumIntervals(intervals) {
    if (intervals.length === 0) return 0;
    if (intervals.length === 1) return getLength(intervals[0]);
    let sorted = intervals.sort();
  
  
    let collapsedIntervals = [];
    
    //this doesn't handle the end of the array properly
    while (sorted.length > 0) {
      let firstInterval;

      if (collapsedIntervals[collapsedIntervals.length - 1]) firstInterval = collapsedIntervals[collapsedIntervals.length - 1];
      else firstInterval =  sorted.shift(); 


      let secondInterval = sorted.shift();
      // console.log(firstInterval);
      // console.log(secondInterval);
      
      
      let result = compareIntervals(firstInterval, secondInterval);
      console.log("result of interval comparison is");
      console.log(result);
  
      //need to handle returns of single and double arrays 
      //TODO this next!!
      if (result.descr === "identical" && !collapsedIntervals[0]) {
        collapsedIntervals.push(result.arr);
      }
      else if (result.descr === "replace") {
        console.log(`replacing, curr length is ${collapsedIntervals.length}`);
        if (collapsedIntervals.length === 0) collapsedIntervals.push(result.arr);
        else collapsedIntervals[collapsedIntervals.length - 1] = result.arr; 
      }
      else if (result.descr === "separate") {
        collapsedIntervals.push(result.arr[0]);
        collapsedIntervals.push(result.arr[1]);
      }
      console.log("collapsed intervals are:");
      console.log(collapsedIntervals);
      
     }
    
    //ok need to modify retrn values to make this more reasonable
    function compareIntervals(int1, int2) {
      if (int1[0] === int2[0]) {
        //case with same start integer
        if (int1[1] === int2[1]) return {descr: "identical", arr: int1}; //ranges are identical, just ignore the 2nd range
        else {
          //return with the bigger end value
          let endVal = int1[1] > int2[1] ? int1[1] : int2[1];
          return {descr: "replace", arr: [int1[1], endVal]};
        }
        
      } else {
        //case with different start integer
        //int1 should always be the smaller integer
        //so can assume int1[0] < int2[0]
        let start = int1[0];
        let end;
  
        //start of int2 is within int1's rang
        if (int2[0] < int1[1]) {
          //is the end bigger or smaller? or the same
          end = int1[1] >= int2[1] ? int1[1] : int2[1];
          return {descr: "replace", arr: [start, end]};
        } else {
          //not in range, return two arrays
          return {descr: "separate", arr: [int1, int2]};
        }
        
      }
    }
    
    function getLength(arr) {
      return arr[arr.length - 1] - arr[0];
    }
        
    console.log("collapsed intervals are:");
    console.log(collapsedIntervals);
    
    
    //get the length of each interval
    let lengths = collapsedIntervals.map(getLength);
    // console.log("lengths are: ");
    // console.log(lengths);
    
    //sum the lengths
    let sum = lengths.reduce((a,b) => a + b);
    
    
    return sum;
  }

  // const test1 = [[1,5]];
  // const test2 = [[6,10], [1,5]]; 
  // const test3 = [[1,5],[1,5]];
  const test4 = [[1,4],[7, 10],[3, 5]];


  // console.log(`========= first test: ${sumIntervals(test1)} : 4 ==========`);
  // console.log(`========== second test: ${sumIntervals(test2)} : 8 ==========`);
  // console.log(`========== third test: ${sumIntervals(test3)} : 4 ==========`);
  console.log(`========== fourth test: ${sumIntervals(test4)} : 7 ==========`);

