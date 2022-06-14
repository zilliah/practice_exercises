function pickPeaks(arr){
  let res = {
    pos: [],
    peaks: []
  };

  for (let i = 1; i < arr.length; i++) {
    //check for basic peak
    if (arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
      res.pos.push(i);
      res.peaks.push(arr[i]);
    }
    //check for plateaus
    else if (arr[i] === arr[i+1] && arr[i] !== arr[i-1] && arr[i] > arr[i-1]) {
      let pos = i;
      let j = i;
      while (arr[j] == arr[i] && j < arr.length - 1) j++;
      if (arr[i] > arr[j]) {
        res.pos.push(i);
        res.peaks.push(arr[i]);
      }
    }
  }
  return res;
}