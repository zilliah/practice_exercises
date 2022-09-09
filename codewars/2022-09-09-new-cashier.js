function getOrder(input) {
  const goodNames = ["Burger","Fries","Chicken","Pizza","Sandwich","Onionrings","Milkshake","Coke"];
  const badNames =  ["burger","fries","chicken","pizza","sandwich","onionrings","milkshake","coke"];
  for (let i = 0; i < badNames.length; i++) {
    while (input.includes(badNames[i])) input = input.replace(badNames[i], goodNames[i] + " ");
  }
  return input.trim().split(" ").sort((a,b) => goodNames.indexOf(a) - goodNames.indexOf(b)).join(" ").trim();
}