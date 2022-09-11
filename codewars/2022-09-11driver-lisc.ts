function driver(data) {
  const surNameChars = (data[2].length >= 5 ? data[2].slice(0, 6) : data[2] + "9".repeat(5 - data[2].length)).toUpperCase();
  const decadeDigit = data[3][data[3].length - 2];
  
  const monthList = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11", 
    Dec: "12"
  };
  let month = data[3].slice(3, 6);
  const birthMonth = data[4] == "M" ? monthList[month] : monthList[month] - 0 + 50;
  
  const birthDate = data[3].slice(0,2);
  const yearDigit = data[3][data[3].length - 1];
  const nameInitials = data[0][0] + (data[1][0] || "9")
  
  return surNameChars + decadeDigit + birthMonth + birthDate + yearDigit + nameInitials + "9" + "AA";
}