
//this is working for small cases but running into some werird stuff for larger, idk
const lastDigit = function(str1, str2){  
  if (str1 == 0 || str2 == 0) return 1;
  
  console.log(`testing ${str1} ^ ${str2}`);

  
  let lastDigit = Number(str1[str1.length - 1]);
  if (lastDigit == 0 || lastDigit == 1 || lastDigit == 5 || lastDigit == 6) return lastDigit;
  else if (lastDigit == 4) return str2 % 2 === 0 ? 6 : 4;
  else if (lastDigit == 9) return str2 % 2 === 0 ? 1 : 9;
  else if (lastDigit == 2) {
      if (str2 % 4 == 0) return 6;
      else if (str2 % 4 == 1) return 2; 
      else if (str2 % 4 == 2) return 4;
      else if (str2 % 4 == 3) return 8;
  }
  else if (lastDigit == 3) {
    if (str2 % 4 == 0) return 1;
    else if (str2 % 4 == 1) return 3;
    else if (str2 % 4 == 2) return 9;
    else if (str2 % 4 == 3) return 7;

  }
  else if (lastDigit == 7) {
      if (str2 % 4 === 0) return 1;
      else if (str2 % 4 === 1) return 7;
      else if (str2 % 4 === 2) return 9;
      else if (str2 % 4 === 3) return 3;
  }
  else if (lastDigit == 8) {
    if (str2 % 4 === 0) return 6;
    else if (str2 % 4 === 1) return 8;
    else if (str2 % 4 === 2) return 4;
    else if (str2 % 4 === 3) return 2;
  }
}

console.log(`======== testing long1 ^ long2, should be 7 :  ${lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")}================`);
console.log(`======== testing 3 ^ 3, should be 7 :  ${lastDigit("3", "3")}================`);
console.log(`======== testing 3 ^ 4, should be 1 :  ${lastDigit("3", "4")}================`);
console.log(`======== testing 3 ^ 2, should be 9 :  ${lastDigit("3", "2")}================`);
// console.log(`======== testing 7 ^ 7, should be 3 :  ${lastDigit("7", "7")}================`);
// console.log(`======== testing 9 ^ 7, should be 9 :  ${lastDigit("9", "7")}================`);


for (let i = 1; i < 12; i++) {
    console.log(3 ** i, i);
}

// 8 = 8, 4, 2, 6

//DONE
// 7 = 7, 9, 3, 1
// 2 = 2, 4, 8, 6
// 3 = 3, 9, 7, 1
// 4 = 4, 6
// 9 = 9, 1