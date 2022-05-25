function countIslands(image){
  let count = 0;
  
  for (let row = 0; row < image.length; row++) {
    
    function hasAbove(index) {
      if (image[row-1][index] === 1) return true;
      else return false;
    }
    
    //inner loop to find islands
    for (let i = 0; i < image[row].length; i++) {
      if (image[row][i] === 1) {
        console.log("island found!");
        
        //check left
        if (image[row][i - 1] === 0 || i === 0) {
            console.log("nothing to the left");
            console.log(image[row][i - 1]);
          //check above
          if (row === 0) {
            console.log("first row, skipping above checks");
            count++;
          } 
          else if (!hasAbove(i)) {
            console.log("nothing above");

            //check diagonals above
            if (!hasAbove(i-1) && !hasAbove(i+1)) {
                console.log("nothing diagonal!")
                count++;
            }
          } 
        }
      }
    }
  }
  return count;
}


const image1 = [
    [0,0,0,1],
    [0,1,1,0],
    [0,0,0,0],
    [0,0,0,0],
];

const image2 = [
[0,0,0,0],
[0,1,0,0],
[0,1,0,0],
[0,0,0,0],
];

const image3 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
console.log(`======= ${countIslands(image1)} : 1`);
// console.log(`======= ${countIslands(image2)} : 1`);
console.log(`======= ${countIslands(image3)} : 2`);

//ok the issue with this test case is that i'm only checking left and above
//which doesn't work if there's a diagonal later
//so idk, i could store the indices of found islands
//and see where they connect
//but honestly, idk, can't tell if i'm just overwhelmed atm
//or if i just can't focus
//coming back to this one