function bump(x){
  const numberBumps = x.split("").filter(x => x === "n").length;
  return numberBumps <= 15 ? "Woohoo!" : "Car Dead";
}