class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }
  
  incProgress(n) {
    if (n < -8 || n === 0 || n > 8) throw new Error(`${n} is not a valid rank`);
    
    //add the progress points
    if (n > this.rank) {
      let diff = Math.abs(n - this.rank);
      if (n > 0 && this.rank < 0) diff--;
      this.progress += 10 * diff * diff;
    }
    else if (n === this.rank) this.progress +=3;
    else this.progress++;
    
    //update rank, if enough progress
    if (this.rank === 8) this.progress = 0;
    while (this.progress >= 100 && this.rank < 8) {
      if (this.rank === -1) this.rank = 1;
      else this.rank++;  
      this.progress -= 100;
      if (this.rank === 8) this.progress = 0;
    }
  }
}