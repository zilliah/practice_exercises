function towerBuilder(nFloors) {
  let width = nFloors * 2 - 1;
  let tower = [];
  
  for (let i = 1; i <= nFloors; i++) {
    let stars = "*".repeat(i * 2 - 1);
    let spaces = " ".repeat((width - stars.length) / 2);
    tower.push(spaces + stars + spaces);
  }
  
  return tower;

}