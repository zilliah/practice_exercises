function solve(s) {
    const alpha = "__bcd_fgh_jklmn_pqrst_vwxyz";
    return Math.max(...s.split(/[aeiou]/)
                    .map(str => str.split("")
                    .reduce((a,b) => a + alpha.indexOf(b), 0)));
  }
  