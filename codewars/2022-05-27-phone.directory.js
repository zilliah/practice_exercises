function phone(strng, num) {
  let arr = strng.trim().split("\n");
  
  let contactArr = arr.map(line => {
    let name = line.slice(line.indexOf("<") + 1, line.indexOf(">"));
    line = line.replace(`<${name}>`, "");

    let phone = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/)[0].slice(1);  
    line = line.replace(phone, "");
    
    let address = line.replace(/[^a-zA-Z\d\s\-\_\.]+/g,"").replace(/_|(\s{2,})/g," ").trim();
    
    return {name, phone, address};
  });
  
  
  let numCount = 0;
  let found = "";
  for (let person of contactArr) {
    if (num === person.phone) {
      numCount++;
      found = person;
    }
  }
  
  if (numCount === 0) return `Error => Not found: ${num}`;
  if (numCount > 1) return `Error => Too many people: ${num}`;
  return `Phone => ${found.phone}, Name => ${found.name}, Address => ${found.address}`;
}