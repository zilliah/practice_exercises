class Jar{
  constructor() {
    this.totalVolume = 0;
  }
  
  add(amount, type) {
    this.totalVolume += amount;
    if (this[type]) this[type] +=  amount;
    else this[type] = amount;
  }
  
  pourOut(amount) {
    let startVol = this.totalVolume;
    let ratioOut = amount / this.totalVolume;
    for (let fruit in this) {
      this[fruit] = this[fruit] - (this[fruit] * ratioOut);
    }
  }
  
  getTotalAmount() {
    return this.totalVolume;
  }
  
  getConcentration(type) {
    if (!this[type]) return 0;
    return this[type] / this.totalVolume;
  }
}