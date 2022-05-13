decodeMorse = function(morseCode){
  return morseCode.split(" ").map(letter => letter ===  "" ? " " : MORSE_CODE[letter]).join("").trim().replace(/\s{2,}/g, " ");
}